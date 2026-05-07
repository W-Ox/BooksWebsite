import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gulobsywqccagtqwvrww.supabase.co'
const supabaseKey = 'sb_publishable_J_OanXXkANnsHaP1NDFAuw_RvQh-pee'

export const supabase = createClient(supabaseUrl, supabaseKey)