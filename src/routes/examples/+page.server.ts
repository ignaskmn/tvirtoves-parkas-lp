import { supabase } from "$lib/supabaseClient";
import type { RequestEvent } from "@sveltejs/kit";

export async function load() {
  try {
    const { data } = await supabase.from("objects").select();
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
    const email = data.get("email");
    const password = data.get("password");

    console.log("email", email);
    console.log("password", password);

    return { success: true };
  },
};
