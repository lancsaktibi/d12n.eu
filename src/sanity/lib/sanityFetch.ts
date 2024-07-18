'only server'

import type { QueryParams } from "@sanity/client";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    tags = DEFAULT_TAGS,
}: {
    query: string;
    params?: QueryParams;
    tags?: string[];
}): Promise<QueryResponse> {
    return client
        .fetch<QueryResponse>(query, params, {
              next:{revalidate:0}
        });
}

export async function sanityFetchPosts<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    tags = DEFAULT_TAGS,
}: {
    query: string;
    params?: QueryParams;
    tags?: string[];
}): Promise<Post[]> {
    return client
        .fetch<Post[]>(query, params, {
              next:{revalidate:0}
        });
}

export interface Post {
    _id: string
    title?: string
    coverImage?: any
    date?: string
    _updatedAt?: string
    excerpt?: string
    author?: string
    slug?: string
    content?: any
  }