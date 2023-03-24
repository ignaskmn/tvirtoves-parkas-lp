import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const page: number = 0;
  const { from, to } = getPagination(0, 10);
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
      page: page ?? 0,
    };
  } catch (error) {
    console.log("error", error);
  }
}

function getPagination(page: number, size: number) {
  const limit = size ? +size : 10;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
}
