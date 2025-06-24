
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uxidbvwpnzheuvmauhqz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4aWRidndwbnpoZXV2bWF1aHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3Nzk0MzksImV4cCI6MjA2NjM1NTQzOX0.E6TK6QtwH38VtJREsBWVmP_pO1hbAdEmFxgRgEhO7uU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
