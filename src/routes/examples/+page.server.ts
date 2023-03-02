import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    const { data } = await supabase.from("examples").select();
    return {
      examples: data ?? [],
    };
  } catch (error) {
    console.log("error", error);
  }
}
