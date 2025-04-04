import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    // Image field for uploading images
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and resizing in the Sanity Studio
      },
    }),
    // File field for uploading PDFs (or other file types)
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
      options: {
        accept: '.pdf', // Restricts file types to PDFs
      },
    }),
    // Link field for adding URLs
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
})
