import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Events", value: "events" },
          { title: "Reflections", value: "reflections" },
          { title: "Updates", value: "updates" },
          { title: "Community", value: "community" },
        ],
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured post",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", category: "category", media: "coverImage" },
    prepare(selection: any) {
      const { category } = selection;
      return { ...selection, subtitle: category };
    },
  },
});
