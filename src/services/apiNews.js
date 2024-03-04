import supabase, { supabaseUrl } from "./supabase";

const imageUrl =
  "https://yfaqdnylyulilftfycrf.supabase.co/storage/v1/object/public/news/"; // milei.jpg

export async function getNews() {
  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    console.error(error);
    throw new Error("News could not be loaded");
  }

  return data;
}

export async function createNew(noticia) {
  const imageName = `${Math.random()}-${noticia.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/news/${imageName}`;

  let query = supabase.from("news").insert([{ ...noticia, image: imagePath }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("News could not be uploaded");
  }

  const { error: storageError } = await supabase.storage
    .from("news")
    .upload(imageName, noticia.image);

  if (storageError) {
    await supabase.from("news").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "New image could not be uploaded and the new was not created"
    );
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