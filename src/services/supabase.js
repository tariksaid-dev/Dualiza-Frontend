import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yfaqdnylyulilftfycrf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFkbnlseXVsaWxmdGZ5Y3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDAzMzcsImV4cCI6MjAyNDk3NjMzN30.aTR4y7ljUDfuF_jdcvCU2dEoXm-o2edGJLmM5Wf3GIE";

const secretKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFkbnlseXVsaWxmdGZ5Y3JmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTQwMDMzNywiZXhwIjoyMDI0OTc2MzM3fQ.Y6FGurHDUQGyey2xmzpUtfg5pCWjRhiv6FXTtlEKOoI";

const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAdmin = createClient(supabaseUrl, secretKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default supabase;
