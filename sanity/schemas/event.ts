import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
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
      name: "date",
      title: "Event date",
      type: "date",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Registration open", value: "registration-open" },
          { title: "Full", value: "full" },
          { title: "Past", value: "past" },
        ],
      },
      initialValue: "upcoming",
    }),
    defineField({
      name: "tallyUrl",
      title: "Registration form URL",
      type: "url",
      description: "Tally.so registration form for this event",
    }),
    defineField({
      name: "attendees",
      title: "Number of attendees",
      type: "number",
      description: "For past events only",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Photo gallery",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
  ],
  preview: {
    select: { title: "title", date: "date", media: "coverImage" },
    prepare(selection: any) {
      const { date } = selection;
      return {
        ...selection,
        subtitle: date ? new Date(date).toLocaleDateString("en-GH") : "",
      };
    },
  },
  orderings: [
    {
      title: "Event date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
