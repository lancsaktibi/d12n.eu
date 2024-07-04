import { groq } from "next-sanity";

export const startQuery = groq`*[ categories ="start' && lang == 'de' ][0]{
body[]{
    ..., // Include all existing properties of the body field
    _type == "image" => {
        "imageWidth": asset->metadata.dimensions.width,
        "imageHeight": asset->metadata.dimensions.height
    }
    
},
}`