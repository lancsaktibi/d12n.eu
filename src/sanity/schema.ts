// activation of data structures for the sanity content editor

import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import post from './schemaTypes/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent],
}
