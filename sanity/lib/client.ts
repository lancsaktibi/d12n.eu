import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export function getClient():SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })
  return client
} 

