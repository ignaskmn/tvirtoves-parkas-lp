import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { pageStates } from "$lib/stores";

export function load({ data }) {
  if (get(pageStates)[0] === 0) {
    throw redirect(302, "/form/1");
  }

  return { activities: data.activities };
}
