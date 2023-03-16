<script lang="ts">
  import Marker from "./Marker.svelte";
  import { goto } from "$app/navigation";
  import { activePage, pageStates } from "$lib/stores";

  function getState(state: number) {
    switch (state) {
      case 0:
        return "unfilled";
      case 1:
        return "filling";
      case 2:
        return "filled";
    }
  }

  function handleClick(index: number) {
    goto(`/${index}`);
  }
</script>

<div class="switcher">
  {#each $pageStates as state, i}
    <Marker
      index={i + 1}
      isActive={$activePage === i + 1}
      onClick={() => handleClick(i + 1)}
      state={getState(state)}
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
