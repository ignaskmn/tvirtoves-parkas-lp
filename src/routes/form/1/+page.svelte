<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Select from "$lib/components/forms/Select.svelte";
  import { supabase } from "$lib/supabaseClient";
  import { goto } from "$app/navigation";
  import { form, services, pageStates } from "$lib/stores";

  export let items: { value: string; label: string }[];
  export let data;

  let object: string;
  let objectDescription: string;
  let objectImages: string;
  let objectSelected = false;

  const { objects } = data;
  if (objects) {
    items = objects.map((object) => ({
      value: object.object_id,
      label: object.name,
    }));
  } else {
    //handle error
    console.log("No objects found");
  }

  function handleChange() {
    if ($form.object) {
      handleSelection();
    } else {
      clearSelection();
    }
  }

  async function handleSelection() {
    if (object != Object.values($form.object)[0]) {
      object = Object.values($form.object)[0];
    } else {
      return;
    }

    objects?.map((o) => {
      if (o.object_id === object) {
        objectDescription = o.description;
        objectImages = o.images;
      }
    });

    $pageStates[0] = 2;

    let { data, error } = await supabase
      .from("service_labels")
      .select()
      .eq("object_id", object);

    if (!data) {
      // handle error
      console.log(error);
    } else {
      // clear services store, populate with data fethced from db
      $services = [];
      $services = data.map((service) => ({
        value: String(service.service_id),
        label: service.label,
      }));
      // check if user has selected any services that don't exist in the new $services store and remove them
      $form.services = $form.services.filter(
        (storedService: { value: string }) =>
          $services.some((service) => service.value === storedService.value)
      );
    }
  }

  function clearSelection() {
    object = "";
    objectDescription = "";
    objectImages = "";
    $pageStates[0] = 0;
    $services = [{ value: "", label: "" }];
    $form.services = [];
  }

  async function handleClick() {
    if (!objectSelected) return;
    // if object is selected and button pressed, go to page 2
    goto("/form/2");
  }

  // $: $form.object ? handleSelection() : clearSelection();
  $: $form.object, handleChange();
  $: objectSelected = $pageStates[0] === 2 ? true : false;
</script>

<section class="layout">
  <div class="map-container" style={`flex-grow: ${objectSelected ? "1" : "1"}`}>
    Map
  </div>
  <div class="input-container">
    <Select
      placeholder={"Pasirinkite objektą"}
      {items}
      bind:value={$form.object}
      name="object"
    />
  </div>
  <div
    class="gallery-container"
    style={`flex-grow: ${objectSelected ? "1" : "1"}`}
  >
    <div class={`gallery ${objectSelected ? "" : "hidden"}`}>
      <p>{objectDescription}</p>
      <p>{objectImages}</p>
    </div>
  </div>
  <!-- Button becomes active if the state of current page becomes equal to 2, which happens when object is selected  -->
  <Button label="Rezervuoti" isActive={objectSelected} onClick={handleClick} />
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

  .map-container {
    transition: flex-grow 0.3s ease-in-out;
  }

  .gallery-container {
    transition: flex-grow 0.3s ease-in-out;
  }

  .input-container {
    width: 90%;
  }

  .gallery {
    opacity: 1;
    /* visibility: visible; */
    transition: opacity 0.3s ease-in-out;
  }

  .gallery p {
    min-height: 1.5rem;
  }

  .hidden {
    opacity: 0;
    /* visibility: hidden; */
  }
</style>
