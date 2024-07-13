import { SanityDocument } from "@sanity/client";
import { startQueryhu, startQueryde, startQueryen } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react'
import { getTranslations } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';


const Page = async ({params: {locale}}) => {
    unstable_setRequestLocale(locale);
    let startQueryLang:string = "startQuery" + locale
    switch(locale) {
        case "de":{
            const [post, t] = await Promise.all([
                sanityFetch<SanityDocument>({
                    query: startQueryde,
                }),
                getTranslations('Index')
            ]) 
        }
        case "en":{
            const [post, t] = await Promise.all([
                sanityFetch<SanityDocument>({
                    query: startQueryen,
                }),
                getTranslations('Index')
            ])
        }
        case "hu":{
            const [post, t] = await Promise.all([
                sanityFetch<SanityDocument>({
                    query: startQueryhu,
                }),
                getTranslations('Index')
            ]) 
        }
    }
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
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            {t('title')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;