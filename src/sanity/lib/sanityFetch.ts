'only server'

import { client } from "./client";
import { 
    startQueryDe, 
    pbListQueryDe, 
    startQueryEn, 
    pbListQueryEn, 
    startQueryHu, 
    pbListQueryHu,
    pbPostQueryDe } from "./queries";
import type { ImageAsset, Slug } from '@sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

export async function getStartDe(): Promise<Post> {
    return (await client.fetch(startQueryDe));
}

export async function getStartEn(): Promise<Post> {
    return (await client.fetch(startQueryEn));
}

export async function getStartHu(): Promise<Post> {
    return (await client.fetch(startQueryHu));
}

export async function getAllPostsDe(): Promise<Post[]> {
    return (await client.fetch(pbListQueryDe));
}

export async function getAllPostsEn(): Promise<Post[]> {
    return (await client.fetch(pbListQueryEn));
}

export async function getAllPostsHu(): Promise<Post[]> {
    return (await client.fetch(pbListQueryHu));
}

export async function getPostDe(slug: string): Promise<Post> {
    return (await client.fetch(pbPostQueryDe, { slug }));
}


export interface Post {
    _id: string
    _createdAt: string
    title?: string
    coverImage?: any
    mainImage?: ImageAsset
    _updatedAt?: string
    excerpt?: string
    author?: string
    slug?: Slug
    body: PortableTextBlock[]
  }