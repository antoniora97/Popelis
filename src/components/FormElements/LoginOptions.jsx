
import React, { useEffect, useState } from 'react'
import supabase from '../../database/client'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function LoginOptions () {

    const { signInWithGoogle } = useAuth()

    // const navigate = useNavigate()
    // const [user, setUser] = useState([])

    // useEffect( () => {
    //     const {data: authListener} = supabase.auth.onAuthStateChange(async (event, session) => {
    //         console.log("supabase event: ", event)
    //         console.log(session?.user)
    //     })
    // }, [])

    return (
        <div className='flex items-center gap-3 text-2xl'>
            <button onClick={signInWithGoogle} className='p-3 text-red-500 transition-all border-2 rounded-full hover:bg-black hover:text-white'><i className="flex fi fi-brands-google"></i></button>
            <button className='p-3 transition-all border-2 rounded-full text-sky-600 hover:bg-black hover:text-white'><i className="flex fi fi-brands-facebook"></i></button>
            <button className='p-3 transition-all border-2 rounded-full text-sky-300 hover:bg-black hover:text-white'><i className="flex fi fi-brands-twitter"></i></button>
            <button className='p-3 text-black transition-all border-2 rounded-full hover:bg-black hover:text-white'><i className="flex fi fi-brands-github"></i></button>
        </div>
    )
}
