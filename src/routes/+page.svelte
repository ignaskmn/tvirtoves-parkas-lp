<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$lib/stores";
  import First from "$lib/components/pages/First.svelte";
  import Second from "$lib/components/pages/Second.svelte";
  import Third from "$lib/components/pages/Third.svelte";
  import { fade } from "svelte/transition";

  let width: number;

  page.subscribe((value) => {
    console.log(value);
  });

  type Object = {
    id: number;
    name: string;
    description: string;
    images: string;
  };

  type Item = {
    value: string;
    label: string;
  };

  // export let form: HTMLFormElement;
  export let data: { objects: Object[] };

  let { objects } = data;
  let isActive = true;
  console.log(objects);

  let items: Item[] = objects.map((object) => {
    return {
      value: String(object.id),
      label: object.name,
    };
  });

  console.log(items);
</script>

<svelte:window bind:innerWidth={width} />

<svelte:head>
  <title>Tvirtovės Parkas - Laisvas Plotas</title>
  <meta
    name="description"
    content="Tvirtovės Parkas - Objektų užsakymo sistema"
  />
</svelte:head>

<form method="POST" use:enhance>
  <section>
    {#if $page === 1}
      <div class="page-container" transition:fade>
        <First {items} />
      </div>
    {/if}
    {#if $page === 2}
      <div class="page-container" transition:fade>
        <Second />
      </div>
    {/if}
    {#if $page === 3}
      <div class="page-container" transition:fade>
        <Third {isActive} />
      </div>
    {/if}
  </section>
</form>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .page-container {
    width: 33vw;
    height: 100%;
  }
</style>
