import { groq } from "next-sanity";

export const startQueryDe = groq`*[categories == 'start' && lang == 'de'][0]`
export const startQueryEn = groq`*[categories == 'start' && lang == 'en'][0]`
export const startQueryHu = groq`*[categories == 'start' && lang == 'hu'][0]`
export const pbListQueryDe = groq`*[categories == 'pb' && lang == 'de']`
export const pbListQueryEn = groq`*[categories == 'pb' && lang == 'en']`
export const pbListQueryHu = groq`*[categories == 'pb' && lang == 'en']`