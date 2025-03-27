import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "https://zpzcpbgijmpqminpbnqz.supabase.co"
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwemNwYmdpam1wcW1pbnBibnF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NTY3NzksImV4cCI6MjA1ODQzMjc3OX0.1SRpX07bd31OLzzKbY46nRfHb96bM_AJJ6yFUMdDTkg"

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check your .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)