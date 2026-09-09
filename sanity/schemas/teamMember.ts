import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "twitter", title: "Twitter/X", type: "url" }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
