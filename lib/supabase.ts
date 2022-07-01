import { createClient } from "@supabase/supabase-js"

const sbUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const sbAnonToken: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const sbClient = createClient(sbUrl, sbAnonToken)