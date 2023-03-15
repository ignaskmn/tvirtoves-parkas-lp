<script lang="ts">
  import Marker from "./Marker.svelte";
  import { page, pages } from "$lib/stores";
  import type { Page } from "$lib/types";

  export let pagez: Page[] = [
    { index: 1, state: "unfilled" },
    { index: 2, state: "filling" },
    { index: 3, state: "filled" },
  ];

  export let activePage: number = 1;

  function handleClick(index: number) {
    activePage = index;
    page.set(index);
  }
</script>

<div class="switcher">
  {#each $pages as p, i}
    <Marker
      index={$pages[i].index}
      isActive={$pages[i].index === activePage}
      onClick={() => handleClick($pages[i].index)}
      state={pagez[i].state}
    />
  {/each}
</div>

<style>
  .switcher {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    --gap: 3rem;
  }
</style>
