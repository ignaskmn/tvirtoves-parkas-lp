import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    const { data } = await supabase
      .from("activities")
      .select()
      .order("activity_id", { ascending: true });
    return {
      activities: data ?? [],
    };
  } catch (error) {
    console.log("error", error);
  }
}
