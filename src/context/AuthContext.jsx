import { createContext, useContext, useEffect, useState } from "react"
import supabase from "../database/client"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    async function signInWithGoogle () {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
            if (error) throw new Error("Ha ocurrido un error durante la autenticación con Google.")
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async function signOut () {
        try {
            const { error } = supabase.auth.signOut()
            if (error) throw new Error("Ha ocurrido un error durante la autenticación con Google.")
        } catch (error) {
            console.error(error)
        }
    } 

    useEffect( () => {
        // console.log(user)
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session == null) {
                    navigate("/", {replace: true})
                } else {
                    setUser(session?.user)
                    // console.log(session?.user)
                    navigate('/home', {replace: true})
                }
            }
        )

        return () => {
            authListener.subscription
        }
    }, [])

    return ( <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}> { children } </AuthContext.Provider> )
}

export const useAuth = () => {
    return useContext(AuthContext)
}