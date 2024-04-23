import supabase, { supabaseAdmin, supabaseUrl } from "./supabase";

export async function getEmails() {
  const { data, error } = await supabase.from("message").select("*");

  if (error) {
    console.error(error);
    throw new Error("Emails could not be loaded");
  }

  return data;
}

export async function createEmail(email) {
  console.log(email)

  const { data, error } = await supabase.from("message").insert(email).select();

  if (error) {
    console.error(error);
    throw new Error("Email could not be uploaded");
  }

  return data;
}
