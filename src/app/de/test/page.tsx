import { SanityDocument } from "@sanity/client";
import { startQueryde, pbListQueryde, type Post } from "../../../sanity/lib/queries";
import { sanityFetch, sanityFetchPosts } from "../../../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react';
import { getTranslations } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';
import Card from "../../../components/Card";
import React from "react";

const Page = async ({params: {locale}}) => {
    unstable_setRequestLocale(locale);
    const [start, posts = [], t] = await Promise.all([
        sanityFetch<SanityDocument>({
            query: startQueryde,
        }),
        sanityFetchPosts<[SanityDocument]>({
            query: pbListQueryde,
        }),
        getTranslations('Index')
    ])

    return (
        <div className="flex justify-center">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {start.title}
                        </h2>
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            <PortableText value={start.body} />
                        </div>
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            {t('title')}
                        </div>
                    </div>
                    
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) =>
                            <React.Fragment key={post._id}>
                                <div>{post.title}</div>
                            </React.Fragment>  
                        )}             
                    </div>    
                </div>
            </div>
        </div>
    );
};

export const dynamic = 'force-dynamic';

export default Page;