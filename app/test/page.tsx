import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PortableText} from "@portabletext/react"
import Image from 'next/image'
import { getClient } from "../../sanity/lib/client"
import { urlForImage } from "../../sanity/lib/image"
import {
  getStart,
  type Post,
  startQuery
} from '../../sanity/lib/queries'
import { useLiveQuery } from 'next-sanity/preview'
import { start } from 'repl'

interface Query {
  [key: string]: string
}

async function getStartPage() {
  const client = getClient()
  const start = await getStart(client)
 
  return start
}
 
export default async function TestPage() {
  const startPage = await getStartPage{}
  return (
    <div className="post__content">
    <PortableText value={startPage.body} />
  </div>
  )