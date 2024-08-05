import { groq } from "next-sanity";

export const startQueryDe = groq`*[categories == 'start' && lang == 'de'][0]`
export const startQueryEn = groq`*[categories == 'start' && lang == 'en'][0]`
export const startQueryHu = groq`*[categories == 'start' && lang == 'hu'][0]`
export const ptListQueryDe = groq`*[categories == 'pt' && lang == 'de']`
export const ptListQueryEn = groq`*[categories == 'pt' && lang == 'en']`
export const ptListQueryHu = groq`*[categories == 'pt' && lang == 'en']`
export const ptPostQueryDe = groq`*[categories == 'pt' && lang == 'de' && slug.current == $slug][0]`