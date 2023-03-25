<script lang="ts">
  import Pagination from "$lib/components/admin/Pagination.svelte";
  import RequestListItem from "$lib/components/admin/RequestListItem.svelte";
  import type { Request } from "$lib/types";
  // import { page } from "$app/stores";
  export let data: { requests: Request[]; count: number; currentPage: number };

  $: requests = data.requests;
  $: count = data.count;
  $: currentPage = data.currentPage;
</script>

<div class="request__container">
  <h3>Gautos užklausos</h3>
  {#key data}
    {#each requests as request}
      <RequestListItem {request} />
    {/each}
    <Pagination page={currentPage} {count} />
  {/key}
</div>

<style>
  .request__container {
    display: flex;
    flex-direction: column;
    width: 1024px;
    gap: 0.5rem;
    padding: 2rem;
  }

  .request__container h3 {
    font-size: 2rem;
    margin: 0;
  }
</style>
