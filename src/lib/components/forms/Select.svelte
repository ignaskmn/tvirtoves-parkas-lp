<script lang="ts">
  import Select from "svelte-select";

  export let label: string = "";
  export let placeholder: string = "";
  export let name: string = "";
  export let value: string = "";
  export let items: { value: string; label: string }[] = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
  ];
</script>

<div class="select-container">
  <label for="select">{label}</label>
  <Select {items} id="select" {placeholder} {name} bind:value />
</div>

<style>
  .select-container {
    --list-max-height: 10rem;
    --item-hover-bg: #cb421036;
    --item-is-active-bg: #cb421077;
    --border-hover: 1px solid var(--color-theme-1);
    --border-focused: 1px solid var(--color-theme-1);
    --font-size: 1.2rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  :global(#select) {
    font-family: var(--font-body);
    font-size: 1.2rem;
    --background: red;
  }
</style>
