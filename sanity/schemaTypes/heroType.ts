import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Post',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Hero greetings',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Hero Heading',
      type: 'text',
    }),
    
    defineField({
      name: 'text',
      title: 'Hero Text',
      type: 'string',
    }),
    
    defineField({
      name: 'gallery',
      title: 'Hero Images must be 2 1 for dark and for light',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
          ],
        },
      ],
      validation: Rule => Rule.max(2), // Restrict to 2 images
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'icon', title: 'Icon', type: 'image' },
          ],
        },
      ],
    }),
  ],
})
