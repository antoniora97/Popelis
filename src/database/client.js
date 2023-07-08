import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    import.meta.env.VITE_REACT_APP_SUPABASE_URL,
    import.meta.env.VITE_REACT_APP_SUPABASE_SECRET_KEY
)

export default supabase