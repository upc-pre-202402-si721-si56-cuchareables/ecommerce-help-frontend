import Img from "next/image";
import CommentIcon from "@/assets/icons/comment.png";
import LikeIcon from "@/assets/icons/like.png";

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
        <section className="w-1/2 m-4 px-8 py-4 border rounded-xl">
            <section className="flex flex-col">
                <span className="text-lg my-2 tracking-tighter">Id del usuario: #{props.userId}</span>
                <section className="flex items-end">
                    <span className="text-blue-600 text-3xl font-bold tracking-tighter">{props.title}</span>
                    <span className="ml-2 text-lg tracking-tighter">
                        - {new Date(props.creationDate).toLocaleDateString()}
                    </span>
                </section>
                <span className="text-lg">{props.content}</span>
                <section className="flex items-center my-2">
                    <span className="text-lg text-blue-600 font-semibold tracking-tighter">Etiquetas:</span>
                    <section className="flex ml-1">
                        {props.tags.map((tag, index) => (
                            <section key={index} className="bg-gray-100 mx-1 px-4 py-2 border rounded-xl">
                                <span>{tag}</span>
                            </section>
                        ))}
                    </section>
                </section>
                <section className="flex justify-evenly my-2">
                    <section className="flex">
                        <Img src={LikeIcon} alt="likes" width={32} height={24}/>
                        <span className="mx-1 text-lg font-semibold tracking-tighter">
                            {props.likes}
                        </span>
                    </section>
                    <section className="flex">
                        <Img src={CommentIcon} alt="comment" width={32} height={24}/>
                        <span className="mx-1 text-lg font-semibold tracking-tighter">
                            {props.commentsCount}
                        </span>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default PostCard;