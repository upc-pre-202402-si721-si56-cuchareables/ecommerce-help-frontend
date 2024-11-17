import Image from "next/image";

import ProfileIcon from "@/assets/icons/profile.png"

type UploadPostProps = {
    imageUrl: string;
}

const UploadPost = () => {
    return (
        <section className="flex my-auto justify-between items-center w-full">
            <Image src={ProfileIcon} alt="profile" width={40} className="mr-2"/>
            <input
                type="text"
                placeholder="Ingresar nombre de usuario"
                className="c-input__input w-[80%]"
            />
            <button className="w-[15%] py-4 px-8 font-semibold bg-blue-500 text-white rounded">
                PUBLICAR POST
            </button>
        </section>
    );
}

export default UploadPost;