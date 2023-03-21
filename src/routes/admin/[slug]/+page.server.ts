import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const { data } = await supabase
      .from("requests")
      .select(
        `created_at, objects (name), activities (label), description, firstName, phone, email, organization, read, services`
      )
      .eq("request_id", params.slug);
    return {
      objects: data ?? [],
    };
  } catch (error) {
    console.log("error", error);
  }
}
