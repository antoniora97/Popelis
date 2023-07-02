import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://vnhgxhbyhkukztmajhnd.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuaGd4aGJ5aGt1a3p0bWFqaG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMjg5NzEsImV4cCI6MjAwMzgwNDk3MX0.xLg32RWBNMDnjuS29glf7Cl7pDyqjUNmQh07qMRI32w"
)

export default supabase