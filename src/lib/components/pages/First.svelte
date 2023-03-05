<script lang="ts">
  import Button from "../Button.svelte";
  import Select from "../forms/Select.svelte";

  let object: string = "";

  $: objectSelected = object !== "" && object !== undefined;
</script>

<section class="layout">
  <div class="grow1">1</div>
  <div class="select-container">
    <Select placeholder={"Pasirinkite objektą"} bind:value={object} />
  </div>
  <div class="grow1">3</div>
  <Button label="Rezervuoti" isActive={objectSelected} />
</section>

<style>
  .layout {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    justify-content: space-between;
  }

  .grow1 {
    flex-grow: 1;
  }

  .select-container {
    width: 90%;
  }
</style>
