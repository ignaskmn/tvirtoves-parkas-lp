<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";
  import "./styles.css";

  export let data: LayoutData;

  $: ({ supabase } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    return () => subscription.unsubscribe();
  });
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
