"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ProfileIcon from "@/assets/icons/profile.png";

const UploadPost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="flex my-auto justify-between items-center w-full">
            <Link href="/" className="flex items-center">
                <Image
                    src={ProfileIcon}
                    alt="profile"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                <span>Cerrar sesión</span>
            </Link>
            <button
                className="w-[15%] py-4 px-8 font-semibold c-button text-white rounded"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                PUBLICAR
            </button>
            {isModalOpen && (
                <section className="fixed inset-0 flex justify-center items-center z-50">
                    <div
                        className="absolute inset-0 bg-gray-900 opacity-70"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <section className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                        <form className="flex flex-col">
                            <h1 className="mt-2 font-bold text-3xl tracking-tighter">
                                Publicar tu post
                            </h1>
                            <input
                                type="text"
                                placeholder="Título del post"
                                className="c-input__input mt-2"
                            />
                            <textarea
                                placeholder="Contenido del post"
                                className="c-input__input mt-2"
                                rows={4}
                                cols={10}
                            />
                            <input
                                type="text"
                                placeholder="Lista de etiquetas separadas por ,"
                                className="c-input__input mt-2"
                            />
                            <button
                                type="button"
                                className="c-button mt-4 py-4 font-semibold"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Publicar
                            </button>
                        </form>
                    </section>
                </section>
            )}
        </section>
    );
};

export default UploadPost;