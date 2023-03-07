<script lang="ts">
  import Button from "../Button.svelte";
  import Select from "../forms/Select.svelte";
  import MultiSelect from "../forms/MultiSelect.svelte";
  import TextField from "../forms/TextField.svelte";
</script>

<section class="layout">
  <div class="input-container">
    <Select
      name="activity"
      label="Numatoma veikla"
      placeholder="Pasirinkite iš sąrašo"
    />
  </div>
  <div class="input-container">
    <TextField name="description" label="Veiklos aprašymas" />
  </div>
  <div class="input-container grow1">
    <MultiSelect
      name="services"
      label="Pridėti paslaugas"
      placeholder="Pasirinkite iš sąrašo"
    />
  </div>
  <Button label="Toliau" isActive={true} />
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
