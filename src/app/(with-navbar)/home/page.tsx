import PostCard from "@/components/PostCard";
import UploadPost from "@/components/UploadPost";

const HomePage = () => {
    return (
        <article className="container mx-auto mt-16">
            <UploadPost />
            <h1 className="mt-8 font-bold text-3xl tracking-tighter">Todos nuestros posts</h1>
            <section className="flex">
                <PostCard
                    userId={1}
                    title="Primer Post"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
                    tags={["react", "typescript"]}
                    creationDate={new Date()}
                    likes={10}
                    commentsCount={5}
                />
                <PostCard
                    userId={1}
                    title="Primer Post"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
                    tags={["react", "typescript"]}
                    creationDate={new Date()}
                    likes={10}
                    commentsCount={5}
                />
            </section>
        </article>
    );
};

export default HomePage;