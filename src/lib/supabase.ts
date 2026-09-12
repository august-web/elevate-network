import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  seedEvents,
  seedPosts,
  seedPrograms,
  seedTeamMembers,
} from "@/lib/seed-data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when the public Supabase credentials are present. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let cachedClient: SupabaseClient | null = null;

/**
 * Browser/shared Supabase client. `null` when unconfigured — every helper
 * below degrades gracefully so the site builds and renders without a database.
 */
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!cachedClient) {
    cachedClient = createClient(
      supabaseUrl as string,
      supabaseAnonKey as string,
    );
  }
  return cachedClient;
}

// ── Types (snake_case columns, camelCase-friendly aliases kept simple) ──

export interface Program {
  id: string;
  title: string;
  slug: string | null;
  tagline: string | null;
  description: string | null;
  impact: string | null;
  status: string | null;
  sort_order: number | null;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  published_at: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  status: string;
  tally_url: string | null;
  attendees: number | null;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo_url: string | null;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  } | null;
  sort_order: number | null;
}

/**
 * Fetch rows from a table, ordered. When Supabase is unconfigured the sample
 * seed content is returned so pages never render empty in local/preview
 * environments; when a live query fails we return an empty array so pages
 * render their graceful empty state instead of crashing.
 */
async function fetchTable<T>(
  table: string,
  order: { column: string; ascending: boolean },
  fallback: T[],
): Promise<T[]> {
  const client = getSupabase();
  if (!client) return fallback;
  try {
    const { data, error } = await client
      .from(table)
      .select("*")
      .order(order.column, { ascending: order.ascending });
    if (error) throw error;
    return (data ?? []) as T[];
  } catch (error) {
    console.error(`[supabase] fetch failed for "${table}":`, error);
    return [];
  }
}

export function getPrograms(): Promise<Program[]> {
  return fetchTable<Program>(
    "programs",
    { column: "sort_order", ascending: true },
    seedPrograms,
  );
}

export function getPosts(): Promise<Post[]> {
  return fetchTable<Post>(
    "posts",
    { column: "published_at", ascending: false },
    seedPosts,
  );
}

export function getEvents(): Promise<Event[]> {
  return fetchTable<Event>(
    "events",
    { column: "date", ascending: false },
    seedEvents,
  );
}

export function getTeamMembers(): Promise<TeamMember[]> {
  return fetchTable<TeamMember>(
    "team_members",
    { column: "sort_order", ascending: true },
    seedTeamMembers,
  );
}
