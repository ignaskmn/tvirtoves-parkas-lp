import { supabase } from "$lib/supabaseClient";
import type { RequestEvent } from "@sveltejs/kit";

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

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const object = data.get("object");

    console.log("object", object);

    return { success: true };
  },
};
