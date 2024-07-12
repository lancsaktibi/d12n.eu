import { groq } from "next-sanity";

export const startQuery = groq`*[categories == 'start' && lang == 'de'][0]`