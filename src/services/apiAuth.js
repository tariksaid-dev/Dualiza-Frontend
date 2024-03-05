import supabase, { supabaseAdmin } from "./supabase";

export async function signup({ fullName, role, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        role,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getAllUsers() {
  const {
    data: { users },
    error,
  } = await supabaseAdmin.auth.admin.listUsers();

  if (error) throw new Error(error.message);

  return users;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUserRol({ id, newRole }) {
  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, {
    user_metadata: { role: newRole },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteUser({ id }) {
  const { data, error } = await supabaseAdmin.auth.admin.deleteUser(id);

  if (error) throw new Error(error.message);

  return data;
}
