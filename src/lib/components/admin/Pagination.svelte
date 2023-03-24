<script lang="ts">
  import Arrow from "./Arrow.svelte";
  export let count: number;
  export let page: number;

  const pages = Math.ceil(count / 10);

  const prevPage = page - 1;
  const nextPage = page + 1;

  function getPaginationNumbers(
    currentPage: number,
    totalPages: number,
    maxPages: number
  ) {
    const half = Math.floor(maxPages / 2);
    const start = Math.max(currentPage - half, 0);
    const end = Math.min(start + maxPages, totalPages);
    return Array.from({ length: end - start }, (_, i) => start + i);
  }
</script>

<div class="pagination">
  {#if prevPage === -1}
    <Arrow isActive={false} left={true} />
  {:else}
    <a href="/admin/req?page={prevPage}">
      <Arrow isActive={true} left={true} />
    </a>
  {/if}
  <div class="numbers">
    {#each getPaginationNumbers(page, pages, 10) as i}
      <a href="/admin/req?page={i}" class={i === page ? "active" : ""}>
        {i + 1}
      </a>
    {/each}
  </div>
  {#if nextPage >= pages}
    <Arrow isActive={false} left={false} />
  {:else}
    <a href="/admin/req?page={nextPage}">
      <Arrow isActive={true} left={false} />
    </a>
  {/if}
</div>

<style>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .active {
    color: var(--color-theme-1);
  }

  .numbers {
    display: flex;
    gap: 1rem;
    text-decoration: none;
    font-weight: 600;
    color: var(--color-theme-1);
    font-size: 2rem;
  }
</style>
