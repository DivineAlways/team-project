import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL; // Read from environment variable
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY; // Read from environment variable

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL or Anon Key not found in environment variables");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
