import Image from "next/image";

import ProfileIcon from "@/assets/icons/profile.png"

type CommentProps = {
    postId?: number;
    userId: number;
    content: string;
    creationDate?: Date;
    likes?: number;
};

const Comment = (props: CommentProps) => {
    return (
        <section className="mt-4">
            <section className="flex items-center">
                <Image
                    src={ProfileIcon}
                    alt="profile"
                    width={24}
                    className="mr-1"
                />
                <span className="mx-1 text-lg font-semibold tracking-tighter">
                    Id del usuario: #{props.userId}
                </span>
            </section>
            <span>{props.content}.</span>
        </section>
    );
}

export default Comment;