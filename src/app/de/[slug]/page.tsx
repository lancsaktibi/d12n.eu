import { getPtPostDe } from "../../../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react'
import { getTranslations } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';


const Page = async ({ params }: { params: { slug: string } }) => {
    const [post] = await Promise.all([
        getPtPostDe(params.slug),
    ])
    
    return (
        <div className="flex justify-center">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {post.title}
                        </h2>
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            <PortableText value={post.body} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const dynamic = 'force-dynamic';
export default Page;