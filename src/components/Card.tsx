// short version of an article for the overview page

import { type SanityDocument } from "next-sanity"
import { PortableText } from "@portabletext/react"
import { type Post } from "../sanity/lib/sanityFetch"

export default function Card({ post }: { post: Post }) {
    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">
                    {post._createdAt}
                </time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">pt</a>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/${post.lang}/${post.slug.current}`}>
                    <span className="absolute inset-0"></span>
                    {post.title}
                    </a>
                </h3>
                <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    <PortableText value={post.body} />
                </div>
            </div>                         
        </article>
    )
}