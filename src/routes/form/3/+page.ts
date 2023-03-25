import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { pageStates } from "$lib/stores";
// import type { PageLoad } from "./$types";

export const load = () => {
  if (get(pageStates)[0] === 0) {
    throw redirect(302, "/form/1");
  }

  // if (get(pageStates)[1] === 0) {
  //   throw redirect(302, "/form/2");
  // }
};
