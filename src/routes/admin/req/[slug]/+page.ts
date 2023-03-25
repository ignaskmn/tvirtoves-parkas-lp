import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, params }) => {
  const { supabase } = await parent();
  const { data: requests } = await supabase
    .from("requests")
    .select(
      `created_at, objects (name), activities (label), description, firstName, phone, email, organization, read, services`
    )
    .eq("request_id", params.slug);
  return {
    requests,
  };
};
