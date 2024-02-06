import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      ogBanner: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      descriptionMore: z.boolean().optional(),
      specificinity: z.string().optional(),
      canonicalURL: z.string().optional(),
      teamsize: z.number().optional(),
      info: z.array(z.string()).default(["others"]),
      time: z.string().optional(),
      unity: z.boolean().optional(),
      unreal: z.boolean().optional(),
      godot: z.boolean().optional(),
      onSteam: z.string().optional(),
      onItchio: z.string().optional(),
    }),
});

export const collections = { blog };
