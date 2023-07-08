import React, { useEffect, useState } from "react";
import LoginOptions from "./LoginOptions";
import supabase from "../../database/client";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username,
                        name
                    }
                }
            })

            console.log(email, username);

            if (error) throw error

            console.log('Registro exitoso.', data.user.id)
        } catch (error) {
            console.error("Error en el registro: ", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-7">
            <h2 className="text-3xl font-semibold capitalize text-emerald-400">Crea tu cuenta</h2>
            <LoginOptions />
            <div className="flex flex-col gap-7">
                <div className="flex items-center gap-3">
                    <hr className="w-16" />
                    <p className="text-sm text-slate-400">o regístrate con tus datos</p>
                    <hr className="w-16" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Input
                        type={"text"}
                        placeholder={"Nombre"}
                        value={name}
                        flatIcon={"fi fi-rr-user"}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Nombre de usuario"}
                        value={username}
                        flatIcon={"fi-rr-portrait"}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type={"email"}
                        placeholder={"Correo electrónico"}
                        value={email}
                        flatIcon={"fi fi-rr-envelope"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        placeholder={"Contraseña"}
                        value={password}
                        flatIcon={"fi fi-rr-lock"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SubmitButton actionName={"Registrar cuenta"} />
                </form>
            </div>
        </div>
    )
}

export default Register;
