import { SanityDocument } from "@sanity/client";
import { startQuery } from "../sanity/lib/queries";
import { sanityFetch } from "../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react'

const Page = async () => {
    const post = await sanityFetch<SanityDocument>({
        query: startQuery,
    });

    return (
            <div>            
                <PortableText value={post.body} />
            </div>

    );
};

export default Page;