import { SanityDocument } from "@sanity/client";
import { startQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/sanityFetch";

const Page = async () => {
    const post = await sanityFetch<SanityDocument>({
        query: startQuery,
    });

    return (
            <div>
                <div>{post.title}</div>
                <div>{post.body[0].text}</div>
                <div>{JSON.stringify(post)}</div>
            </div>

    );
};

export default Page;