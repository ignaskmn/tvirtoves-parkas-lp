<script lang="ts">
  import Marker from "./Marker.svelte";
  import type { Page } from "$lib/types";

  export let pages: Page[] = [
    { index: 1, state: "unfilled" },
    { index: 2, state: "filling" },
    { index: 3, state: "filled" },
  ];

  export let activePage: number = 1;
</script>

<div class="switcher">
  {#each pages as page}
    <Marker
      index={page.index}
      isActive={page.index === activePage}
      onClick={() => (activePage = page.index)}
      state={page.state}
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
