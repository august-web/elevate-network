import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One-line summary of the program",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "impact",
      title: "Impact stats",
      type: "string",
      description: "e.g., '800+ students reached across 12 schools'",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Coming soon", value: "coming-soon" },
          { title: "Paused", value: "paused" },
        ],
      },
      initialValue: "active",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", tagline: "tagline", media: "coverImage" },
  },
});
