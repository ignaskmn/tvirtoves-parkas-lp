<script lang="ts">
  import Select from "svelte-select";

  export let label: string = "";
  export let placeholder: string = "";
  export let name: string = "";
  export let value: string[] = [];
  export let listEmpty: boolean = false;
  export let items: { value: string; label: string }[] = [
    { value: "4", label: "Four" },
    { value: "5", label: "Five" },
    { value: "6", label: "Six" },
    { value: "7", label: "Seven" },
    { value: "8", label: "Eight" },
    { value: "9", label: "Nine" },
    { value: "10", label: "Ten" },
    { value: "11", label: "Eleven" },
    { value: "12", label: "Twelve" },
  ];
</script>

<div class="select-container">
  <label for="select">{label}</label>
  <Select
    multiple
    {items}
    id="select"
    {placeholder}
    {name}
    closeListOnChange={listEmpty}
    clearable={false}
    bind:value
  />
</div>

<style>
  .select-container {
    --list-max-height: 10rem;
    --item-hover-bg: #cb421036;
    --item-is-active-bg: #cb421077;
    --border-hover: 1px solid var(--color-theme-1);
    --border-focused: 1px solid var(--color-theme-1);
    --font-size: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  :global(#select) {
    font-family: var(--font-body);
    font-size: 1.2rem;
  }
</style>
