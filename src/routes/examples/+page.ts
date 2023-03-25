import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { supabase } = await parent();
  const { data: examples } = await supabase.from("examples").select();

  return {
    examples,
  };
};

// export const load: PageLoad = async ({ parent }) => {
//   const { supabase } = await parent();
//   const { data: examples } = await supabase.from("examples").select();

//   return {
//     examples
//   };
// };
