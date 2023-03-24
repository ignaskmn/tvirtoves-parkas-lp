<script lang="ts">
  import RequestListItem from "./RequestListItem.svelte";
  import type { Request } from "$lib/types";
  export let requests: Request[];
</script>

<div class="requests">
  {#each requests as request}
    <RequestListItem {request} />
  {/each}
</div>

<style>
  .requests {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
</style>
