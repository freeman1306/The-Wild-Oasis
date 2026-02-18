
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mcdvfxgpnstnycgyxaeo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZHZmeGdwbnN0bnljZ3l4YWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTAyOTIsImV4cCI6MjA4NjM4NjI5Mn0.76FbP6Kcv75qSFfzuf5A2CLrr07ozaLISYpIPNYAtak'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase