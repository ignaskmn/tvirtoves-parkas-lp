import type { Load } from "@sveltejs/kit";

export async function load({ url }: any) {
  return {
    currentPath: url.pathname,
  };
}
