import { groq } from "next-sanity";
import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'

export const startQueryde = groq`*[categories == 'start' && lang == 'de'][0]`
export const startQueryen = groq`*[categories == 'start' && lang == 'en'][0]`
export const startQueryhu = groq`*[categories == 'start' && lang == 'hu'][0]`
export const pbListQueryde = groq`*[categories == 'pb' && lang == 'de']`

export interface Post {
    _type: 'post'
    _id: string
    _createdAt: string
    title?: string
    slug: Slug
    excerpt?: string
    mainImage?: ImageAsset
    body: PortableTextBlock[]
  }