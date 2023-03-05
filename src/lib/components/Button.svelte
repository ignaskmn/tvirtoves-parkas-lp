<script lang="ts">
  export let label: string = "";
  export let isActive: boolean = false;
  export let onClick: () => void = () => {};
</script>

<button class={isActive ? "active" : "inactive"} on:click={onClick}
  >{label}</button
>

<style>
  button {
    width: fit-content;
    font-weight: 500;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    padding: 0.5rem 3rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

  .active {
    background-color: var(--color-bg-0);
    border: 0.1rem solid var(--color-filled);
    color: var(--color-filled);
  }

  .active:hover {
    background-color: #e9f0e5;
    color: var(--color-theme-2);
  }

  .inactive {
    background-color: var(--color-bg-0);
    border: 0.1rem solid #999999;
    color: #999999;
  }
</style>
