import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './categoryType'
import { blogType } from './blogType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, blogType],
}
