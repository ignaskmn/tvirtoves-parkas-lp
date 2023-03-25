import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { pageStates } from "$lib/stores";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  if (get(pageStates)[0] === 0) {
    throw redirect(302, "/form/1");
  }

  const { supabase } = await parent();
  const { data: activities } = await supabase.from("activities").select();

  return { activities };
};
