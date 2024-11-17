"use client"
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const [value, setValue] = useState("store");
    const [username, setUsername] = useState("");

    const setRouterHandler = () => {
        if (value) {
            if (value === "store") window.location.href = `/home`;
            else if (value === "client") window.location.href = `/home`;
        }
    };

    return (
        <section className="flex items-center w-1/4 h-screen m-auto px-16">
            <section className="w-full">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">INICIAR SESIÓN</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder="Ingresar nombre de usuario"
                        className="c-input__input"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        type="password"
                        placeholder="Ingresar contraseña"
                        className="c-input__input my-2"
                    />
                    <button
                        className="c-button py-4 font-semibold"
                        onClick={setRouterHandler}
                    >
                        Ingresar
                    </button>
                </section>
                <span>¿No tienes cuenta? <Link href="/sign-up"><u>Crear cuenta</u></Link> </span>
            </section>
        </section>
    );
};

export default Login;