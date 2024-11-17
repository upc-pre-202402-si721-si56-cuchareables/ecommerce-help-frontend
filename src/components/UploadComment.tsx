import Comment from "@/components/Comment"

const UploadComment = () => {
    return (
        <section>
            <section className="flex justify-between w-full mt-2">
                <input
                    type="text"
                    placeholder="Ingresar comentario"
                    className="c-input__input w-[73%]"
                />
                <button className="w-[25%] py-4 px-8 font-semibold c-button text-white rounded">
                    PUBLICAR
                </button>
            </section>
            <Comment
                userId={24}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />
        </section>
    );
}

export default UploadComment;