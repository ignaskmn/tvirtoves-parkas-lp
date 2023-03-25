import type { PageLoad } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ parent, url }) => {
  const { supabase } = await parent();
  const query = url.searchParams.get("page");
  let page: number;
  if (query) {
    page = parseInt(query) ? parseInt(query) : 0;
  } else {
    page = 0;
  }
  const { from, to } = getPagination(page, 10);
  try {
    const { data, count } = await supabase
      .from("requests")
      .select(`request_id, created_at, objects (name), email, read`, {
        count: "exact",
      })
      .order("created_at", { ascending: false })
      .range(from, to);
    return {
      requests: data ?? [],
      count: count ?? 0,
      currentPage: page ?? 0,
    };
  } catch (error) {
    console.log("error", error);
  }
};

function getPagination(page: number, size: number) {
  const limit = size ? +size : 10;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
}
