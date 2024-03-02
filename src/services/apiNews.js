import supabase, { supabaseUrl } from "./supabase";

export async function getNews() {
  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    console.error(error);
    throw new Error("News could not be loaded");
  }

  return data;
}

export async function deleteNew(id) {
  const { data, error } = await supabase.from("news").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("News could not be deleted");
  }

  return data;
}
