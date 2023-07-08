import React from "react";
import LoginOptions from "../components/FormElements/LoginOptions";
import "../js/guestHome.js"
import Register from "../components/FormElements/Register";

export default function GuestHome() {
    return (
        <div className="relative flex items-center justify-center h-screen p-2 overflow-hidden bg-white">
            {/* LOGO */}
            <div id="logo" className="absolute z-20 text-white top-1 left-2 mix-blend-difference">
                <h3 id="logo-text" className="flex items-center gap-3"><i className="flex text-3xl fi fi-brands-youtube"></i>Popelis</h3>
            </div>

            {/* MENSAJE */}
            <div id="message" className="w-[35%] h-full my-auto bg-emerald-500 absolute left-0 transition-all top-0 z-10 flex items-center justify-center flex-col gap-2 duration-1000" style={{ transformOrigin: "center" }}>
                <div id="register-message" className="flex flex-col items-center gap-2 text-white">
                    <h2 className="text-3xl font-bold">¡Hola!</h2>
                    <p>¿Nuev@ por aquí?</p>
                    <button id="register-message-btn" className="px-4 py-2 border-2 rounded-full hover:text-black hover:bg-white">Crea una cuenta</button>
                </div>
                <div id="login-message" className="hidden">
                    <h2 className="text-3xl font-bold">¡Hola de nuevo!</h2>
                    <p>¿Ya tienes una cuenta?</p>
                    <button id="login-message-btn" className="px-4 py-2 border-2 rounded-full hover:text-black hover:bg-white">Inicia sesión</button>
                </div>
            </div>

            {/* LOGIN */}
            <div id="register-form" className="w-[65%] h-full absolute top-0 left-[35%] transition-all flex items-center justify-center duration-1000">
                <Register />
                {/* <Login /> */}
                {/* <LoginOptions /> */}
            </div>
        </div>
    );
}
