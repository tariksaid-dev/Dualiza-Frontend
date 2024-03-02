import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yfaqdnylyulilftfycrf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFkbnlseXVsaWxmdGZ5Y3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDAzMzcsImV4cCI6MjAyNDk3NjMzN30.aTR4y7ljUDfuF_jdcvCU2dEoXm-o2edGJLmM5Wf3GIE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
