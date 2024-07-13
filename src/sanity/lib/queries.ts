import { groq } from "next-sanity";

export const startQueryde = groq`*[categories == 'start' && lang == 'de'][0]`
export const startQueryen = groq`*[categories == 'start' && lang == 'en'][0]`
export const startQueryhu = groq`*[categories == 'start' && lang == 'hu'][0]`