<script lang="ts">
  import Select from "svelte-select";
  export let label: string = "";
  export let placeholder: string = "";
  export let value: string = "";
  export let items: { value: string; label: string }[] = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
  ];
</script>

<label for="select">{label}</label>
<Select {items} id="select" {placeholder} bind:value />

<style>
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
