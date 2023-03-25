import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { supabase } = await parent();
  const { data: objects } = await supabase
    .from("objects")
    .select()
    .order("object_id", { ascending: true });

  return {
    objects,
  };
};
