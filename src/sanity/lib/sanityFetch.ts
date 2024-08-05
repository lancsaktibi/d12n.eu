'only server'

import { client } from "./client";
import { 
    startQueryDe, 
    ptListQueryDe, 
    startQueryEn, 
    ptListQueryEn, 
    startQueryHu, 
    ptListQueryHu,
    ptPostQueryDe } from "./queries";
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

export async function getAllPtPostsDe(): Promise<Post[]> {
    return (await client.fetch(ptListQueryDe));
}

export async function getAllPtPostsEn(): Promise<Post[]> {
    return (await client.fetch(ptListQueryEn));
}

export async function getAllPtPostsHu(): Promise<Post[]> {
    return (await client.fetch(ptListQueryHu));
}

export async function getPtPostDe(slug: string): Promise<Post> {
    return (await client.fetch(ptPostQueryDe, { slug }));
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
    lang: string 
    body: PortableTextBlock[]
  }