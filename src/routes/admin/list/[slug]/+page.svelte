<script lang="ts">
  import Pagination from "$lib/components/admin/Pagination.svelte";
  import RequestListItem from "$lib/components/admin/RequestListItem.svelte";
  import type { Request } from "$lib/types";
  export let data: { requests: Request[]; count: number; page: number };

  const { requests, count, page } = data;
</script>

<div class="request__container">
  <h3>Gautos užklausos</h3>
  {#each requests as request}
    <RequestListItem {request} />
  {/each}
  <Pagination {page} {count} />
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
