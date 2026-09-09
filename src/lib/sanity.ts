import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-06-01";

/** True when the public Sanity project id is present. */
export const isSanityConfigured = Boolean(projectId && dataset);

/**
 * Sanity client. `null` when unconfigured — every helper below degrades
 * gracefully (empty results) so the site builds and renders without CMS access.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

export interface Program {
  _id: string;
  title: string;
  slug?: { current?: string };
  tagline?: string;
  coverImage?: SanityImageSource;
}

/** Schema: `program` — Phase 2 seeds the full schema in Sanity Studio. */
export const PROGRAM_QUERY = `*[_type == "program"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  tagline,
  coverImage
}`;

/**
 * Fetch typed documents from Sanity.
 * Returns an empty array when Sanity is unconfigured or the request fails,
 * so pages always render (see EmptyState components).
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T[]> {
  if (!client) return [];
  try {
    const result = params
      ? await client.fetch<T | T[]>(query, params)
      : await client.fetch<T | T[]>(query);
    if (Array.isArray(result)) return result;
    return result ? [result] : [];
  } catch (error) {
    console.error("[sanity] fetch failed:", error);
    return [];
  }
}

/** Image URL builder for Sanity assets, or null when unconfigured. */
export function urlForImage(source: SanityImageSource) {
  if (!client) return null;
  return createImageUrlBuilder(client).image(source);
}