import type { Load } from "@sveltejs/kit";

export async function load({ url }) {
  return {
    currentPath: url.pathname,
  };
}
