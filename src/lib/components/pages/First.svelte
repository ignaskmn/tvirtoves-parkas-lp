<script lang="ts">
  import Button from "../Button.svelte";
  import Select from "../forms/Select.svelte";

  export let items: { value: string; label: string }[];
  // export let items: { value: string; label: string }[] = [
  //   { value: "1", label: "One" },
  //   { value: "2", label: "Two" },
  //   { value: "3", label: "Three" },
  // ];

  let object: string = "";

  $: objectSelected = object !== "" && object !== undefined;
</script>

<section class="layout">
  <div class="grow1">Map</div>
  <div class="input-container">
    <Select
      placeholder={"Pasirinkite objektą"}
      {items}
      bind:value={object}
      name="object"
    />
  </div>
  <div class="grow1">Gallery</div>
  <Button label="Rezervuoti" isActive={objectSelected} />
</section>

<style>
  .layout {
    width: 100%;
    height: 100%;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    justify-content: space-between;
  }

  .grow1 {
    flex-grow: 1;
  }

  .input-container {
    width: 90%;
  }
</style>
