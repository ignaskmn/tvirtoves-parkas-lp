<script lang="ts">
  import Button from "../Button.svelte";
  import Input from "../forms/Input.svelte";
</script>

<section class="layout">
  <h1>Kontaktinis asmuo</h1>
  <div class="input-container"><Input name="firstName" label="Vardas" /></div>
  <div class="input-container"><Input name="phone" label="Telefono nr." /></div>
  <div class="input-container">
    <Input name="email" label="El. pašto adresas" />
  </div>
  <div class="input-container grow1">
    <Input name="organization" label="Organizacija" />
  </div>
  <Button label="Siųsti užklausą" isActive={false} type="submit" />
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
