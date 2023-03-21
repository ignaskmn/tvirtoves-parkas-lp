<script lang="ts">
  import Map from "./Map.svelte";
  import MapMarker from "./MapMarker.svelte";
  import { form } from "$lib/stores";

  export let items: { value: number; label: string }[];
  export let scale: number = 1;
  let shift: number = 0;

  let scaledCoords = [
    {
      lat: 265,
      lng: 183,
    },
    {
      lat: 217,
      lng: 196,
    },
    {
      lat: 153,
      lng: 184,
    },
    {
      lat: 169,
      lng: 238,
    },
    {
      lat: 209,
      lng: 268,
    },
    {
      lat: 279,
      lng: 269,
    },
    {
      lat: 343,
      lng: 244,
    },
    {
      lat: 315,
      lng: 143,
    },
    {
      lat: 185,
      lng: 97,
    },
  ];

  $: object = $form.object ? parseInt(Object.values($form.object)[0]) : null;
  $: shift = object ? -scaledCoords[object - 1].lng + 120 * scale : 0;

  function setActive(current: number) {
    if (current === object) {
      $form.object = "";
    } else {
      let object = items.find((item) => item.value === current);
      $form.object = object as any;
    }
  }
</script>

<div class="map" style={`transform: scale(${scale}) translate(0, ${shift}px)`}>
  <Map width={30} />

  {#each scaledCoords as coord, i}
    <MapMarker
      lat={coord.lat - 15}
      lng={coord.lng - 10}
      width={1.5}
      isActive={i + 1 === object}
      onClick={() => {
        setActive(i + 1);
      }}
    />
  {/each}
</div>

<style>
  .map {
    display: flex;
    position: relative;

    transition: all 0.3s ease-in-out;
  }
</style>
