
import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

const Posts = () => {
    const posts = getSortedPostsData()

    return (
        <section className="mt-10 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-slate-50">Blog</h2>
            <h3 className="text-3xl dark:text-slate-50 mt-10">Filmography</h3>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

export default Posts