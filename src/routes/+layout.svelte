<script lang="ts">
  import "./styles.css";

  // import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
  // import type { LayoutServerLoad } from "./$types";
  // import type { Database } from "../DatabaseDefinitions";

  // export const load: LayoutServerLoad = async ({ fetch, data, depends }) => {
  //   depends("supabase:auth");

  //   const supabase = createSupabaseLoadClient<Database>({
  //     supabaseUrl: import.meta.env.PUBLIC_SUPABASE_URL,
  //     supabaseKey: import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  //     event: { fetch },
  //     serverSession: data.session,
  //   });

  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();

  //   return { supabase, session };
  // };
</script>

<svelte:head>
  <title>Tvirtovės Parkas - Laisvas Plotas</title>
  <meta
    name="description"
    content="Tvirtovės Parkas - Objektų užsakymo sistema"
  />
</svelte:head>

<div class="app">
  <main>
    <slot />
  </main>
</div>

<style>
  main {
    display: flex;
    justify-content: center;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
  }
</style>
