import Link from "next/link";

import BackButton from "@/components/BackButton";

const Login = () => {
    return (
        <section className="flex items-center w-1/4 h-screen m-auto px-16">
            <section className="w-full">
                <BackButton route="/login" />
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">
                    CREAR CUENTA
                </h1>
                <section className="flex flex-col mx-auto my-4">
                    <input type="text" placeholder="Ingresar nombre de usuario" className="c-input__input" />
                    <input type="text" placeholder="Ingresar email" className="c-input__input mt-2" />
                    <input type="text" placeholder="Ingresar contraseña" className="c-input__input mt-2" />
                    <input type="text" placeholder="Ingresar imagen del perfil" className="c-input__input mt-2" />
                    <input type="text" placeholder="Ingresar biografia" className="c-input__input mt-2" />
                    <button className="c-button mt-2 py-4 font-semibold">
                        Crear cuenta
                    </button>
                </section>
                <span>
                    ¿Ya tienes cuenta?
                    <Link href="/login">
                        <u>Iniciar sesión</u>
                    </Link>
                </span>
            </section>
        </section>
    );
}

export default Login;