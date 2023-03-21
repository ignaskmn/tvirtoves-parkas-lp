<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/forms/Input.svelte";
  import { form, pageStates, services } from "$lib/stores";
  import { supabase } from "$lib/supabaseClient";
  import { goto } from "$app/navigation";

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

  // check if all fields are empty and fire the functions accordingly
  $: $form.firstName === "" &&
  $form.phone === "" &&
  $form.email === "" &&
  $form.organization === ""
    ? handleEmptied()
    : handleFilled();

  async function insertData(formData: any) {
    if (checkEmail(formData.email) === false) {
      return;
    }
    // object is a required field so we can safely parse it
    const object = parseInt(formData.object.value);
    // activity might take on several types of values so we need to check if it's empty
    const activity =
      formData.activity != ("" || undefined || null)
        ? parseInt(formData.activity.value)
        : null;
    const services = formData.services;

    let servicesArray: string[] = [];

    // services is an optional field so we need to check if it's empty
    if (services.length > 0) {
      services.forEach((service: { value: string; label: string }) => {
        servicesArray.push(service.value);
      });
    }

    const { data, error } = await supabase
      .from("requests")
      .insert([
        {
          object: object,
          activity: activity,
          description: formData.description,
          services: servicesArray,
          firstName: formData.firstName,
          phone: formData.phone,
          email: formData.email,
          organization: formData.organization,
        },
      ])
      .select();

    if (error) {
      console.log("error", error);
    } else {
      clearForm();
      $pageStates = [0, 0, 0];
      $services = [{ value: "", label: "" }];
      goto("/success");
    }

    return data;
  }

  function checkEmail(email: string) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
      return true;
    } else {
      alert("Neteisingas el. pašto adresas");
      return false;
    }
  }

  function clearForm() {
    $form.object = "";
    $form.activity = "";
    $form.description = "";
    $form.services = [];
    $form.firstName = "";
    $form.phone = "";
    $form.email = "";
    $form.organization = "";
  }
</script>

<section class="layout">
  <h1 class="grow1">Kontaktinis asmuo</h1>
  <div class="input-container">
    <Input name="firstName" label="Vardas" bind:value={$form.firstName} />
  </div>
  <div class="input-container">
    <Input name="phone" label="Telefono nr." bind:value={$form.phone} />
  </div>
  <div class="input-container" id="email">
    <Input name="email" label="El. pašto adresas" bind:value={$form.email} />
  </div>
  <div class="input-container grow1">
    <Input
      name="organization"
      label="Organizacija"
      bind:value={$form.organization}
    />
  </div>
  <Button
    label="Siųsti užklausą"
    {isActive}
    onClick={() => insertData($form)}
  />
</section>

<style>
  .layout {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    margin: 0;
  }

  .grow1 {
    flex-grow: 1;
  }

  .input-container {
    width: 100%;
  }
</style>
