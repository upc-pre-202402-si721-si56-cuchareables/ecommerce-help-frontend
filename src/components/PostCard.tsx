import Image from "next/image";
import CommentIcon from "@/assets/icons/comment.png";
import LikeIcon from "@/assets/icons/like.png";
import UploadComment from "./UploadComment";

type PostCardProps = {
    userId: number;
    title: string;
    content: string;
    tags: string[];
    creationDate: Date;
    likes: number;
    commentsCount: number;
};

const PostCard = (props: PostCardProps) => {
    return (
        <section className="w-[47%] m-4 px-8 py-4 border rounded-xl">
            <section className="flex flex-col">
                <span className="text-lg my-2 tracking-tighter">
                    Id del usuario: #{props.userId}
                </span>
                <section className="flex justify-between">
                    <section>
                        <span className="u-green-text text-3xl font-bold tracking-tighter">{props.title}</span>
                        <span className="ml-2 text-lg tracking-tighter">
                            - {new Date(props.creationDate).toLocaleDateString()}
                        </span>
                    </section>
                    <section className="flex content-center">
                        <figure>
                            <Image
                                src={LikeIcon}
                                alt="likes"
                                width={24}
                                height={24}
                                objectFit="contain"
                            />
                        </figure>
                        <span className="mx-1 text-lg font-semibold tracking-tighter">
                            {props.likes}
                        </span>
                    </section>
                </section>
                <span className="text-lg">{props.content}</span>
                <section className="flex items-center my-2">
                    <span className="text-lg u-green-text font-semibold tracking-tighter">Etiquetas:</span>
                    <section className="flex ml-1">
                        {props.tags.map((tag, index) => (
                            <section key={index} className="bg-gray-100 mx-1 px-4 py-2 border rounded-xl">
                                <span>{tag}</span>
                            </section>
                        ))}
                    </section>
                </section>
                <section>
                    <section className="flex">
                    <figure>
                            <Image
                                src={CommentIcon}
                                alt="comment"
                                width={24}
                                height={24}
                                objectFit="contain"
                            />
                        </figure>
                        <span className="mx-1 text-lg font-semibold tracking-tighter">
                            Comentarios: {props.commentsCount}
                        </span>
                    </section>
                    <UploadComment />
                </section>
            </section>
        </section>
    );
};

export default PostCard;