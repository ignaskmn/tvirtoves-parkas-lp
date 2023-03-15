<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Select from "$lib/components/forms/Select.svelte";
  import { supabase } from "$lib/supabaseClient";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { form, services } from "$lib/stores";

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

  async function handleSelection() {
    object = Object.values($form.object)[0];

    objects?.map((o) => {
      if (o.object_id === object) {
        objectDescription = o.description;
        objectImages = o.images;
      }
    });

    let { data, error } = await supabase
      .from("service_labels")
      .select()
      .eq("object_id", object);

    if (!data) {
      // handle error
      console.log(error);
    } else {
      // set services to services store
      $services = [];
      data.forEach((service) => {
        $services.push({
          value: String(service.service_id),
          label: service.label,
        });
      });
    }
  }

  function clearSelection() {
    object = "";
    objectDescription = "";
    objectImages = "";
    $services = [];
  }

  async function handleClick() {
    if (!objectSelected) return;
    // get selected object id

    // set services to form
    goto("/2");
  }

  $: objectSelected = $form.object !== "" && $form.object !== undefined;
  $: $form.object ? handleSelection() : clearSelection();
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
