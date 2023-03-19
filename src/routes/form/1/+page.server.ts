import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    const { data } = await supabase
      .from("objects")
      .select()
      .order("object_id", { ascending: true });
    return {
      objects: data ?? [],
    };
  } catch (error) {
    console.log("error", error);
  }
}
