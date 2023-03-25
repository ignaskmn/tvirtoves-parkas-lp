<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Select from "$lib/components/forms/Select.svelte";
  import { page } from "$app/stores";
  import type { Object } from "$lib/types";
  import { goto } from "$app/navigation";
  import { form, services, pageStates } from "$lib/stores";
  import MapWithMarkers from "$lib/components/map/MapWithMarkers.svelte";

  export let data: { objects: Object[] };

  let items: { value: number; label: string }[];
  let object: string;
  let objectDescription: string;
  let objectImages: string;
  let objectSelected = false;
  let innerWidth: number;

  let mapContainerWidth: number;

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
      if (String(o.object_id) === object) {
        objectDescription = o.description;
        objectImages = o.images;
      }
    });

    $pageStates[0] = 2;

    let { data, error } = await $page.data.supabase
      .from("service_labels")
      .select()
      .eq("object_id", object);

    if (!data) {
      // handle error
      console.log(error);
    } else {
      // clear services store, populate with data fethced from db
      $services = [];
      $services = data.map((service: any) => ({
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

  function handleClick() {
    if (!objectSelected) return;
    // if object is selected and button pressed, go to page 2
    goto("/form/2");
  }

  $: $form.object, handleChange();
  $: objectSelected = $pageStates[0] === 2 ? true : false;
  $: mapContainerWidth = innerWidth < 480 ? innerWidth : 480;
  $: mapScale = innerWidth < 480 ? innerWidth / 480 : 1;
</script>

<svelte:window bind:innerWidth />

<section class="layout">
  <div
    class="map-container"
    style={`height: ${objectSelected ? 192 : mapContainerWidth / 1.333333}px`}
  >
    <MapWithMarkers {items} scale={mapScale} />
  </div>
  <div class="input-container">
    <Select
      placeholder={"Pasirinkite objektą"}
      {items}
      bind:value={$form.object}
      name="object"
    />
  </div>
  <div class="gallery-container">
    <div class={`gallery ${objectSelected ? "" : "hidden"}`}>
      <!-- <p>{objectDescription}</p>
      <p>{objectImages}</p> -->
    </div>
  </div>
  <!-- Button becomes active if the state of current page becomes equal to 2, which happens when object is selected  -->
  <Button label="Rezervuoti" isActive={objectSelected} onClick={handleClick} />
</section>

<style>
  .layout {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow: hidden; */
    gap: 1rem;
  }

  .map-container {
    display: flex;

    transition: all 0.3s ease-in-out;
  }

  .gallery-container {
    flex-grow: 1;
    transition: flex-grow 0.3s ease-in-out;
  }

  .input-container {
    width: 100%;
  }

  .gallery {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .hidden {
    opacity: 0;
  }
</style>
