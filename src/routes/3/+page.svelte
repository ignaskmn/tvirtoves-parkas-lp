<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/forms/Input.svelte";
  import { form, pageStates } from "$lib/stores";

  export let isActive: boolean = true;

  function handleFilled() {
    if ($form.firstName != "" && $form.phone != "" && $form.email != "") {
      $pageStates[2] = 2;
    } else {
      $pageStates[2] = 1;
    }
  }

  function handleEmptied() {
    $pageStates[2] = 0;
  }

  $: $form.firstName === "" &&
  $form.phone === "" &&
  $form.email === "" &&
  $form.organization === ""
    ? handleEmptied()
    : handleFilled();
</script>

<section class="layout">
  <h1>Kontaktinis asmuo</h1>
  <div class="input-container">
    <Input name="firstName" label="Vardas" bind:value={$form.firstName} />
  </div>
  <div class="input-container">
    <Input name="phone" label="Telefono nr." bind:value={$form.phone} />
  </div>
  <div class="input-container">
    <Input name="email" label="El. pašto adresas" bind:value={$form.email} />
  </div>
  <div class="input-container grow1">
    <Input
      name="organization"
      label="Organizacija"
      bind:value={$form.organization}
    />
  </div>
  <Button label="Siųsti užklausą" {isActive} type="submit" />
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

  h1 {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .grow1 {
    flex-grow: 1;
  }

  .input-container {
    width: 90%;
  }
</style>
