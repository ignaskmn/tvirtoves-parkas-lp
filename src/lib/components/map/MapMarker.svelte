<script lang="ts">
  export let lat: number;
  export let lng: number;
  export let width: number = 1.5;
  export let isActive: boolean = false;
  export let onClick: () => void = () => {};
</script>

<button
  class="marker {isActive ? 'active' : ''}"
  style="width: {width}rem; height: {width}rem; left: {lat}px; top: {lng}px"
  on:click={onClick}
>
  {#if isActive}
    <div
      class="pin"
      style="width: {width * 0.6}rem; height: {width * 0.6}rem"
    />
  {/if}
</button>

<style>
  .marker {
    background-color: transparent;
    border-width: 0;
    position: absolute;
    border: 3.5px dashed var(--color-theme-1);
    border-radius: 50%;
    cursor: pointer;
  }

  .active {
    border: 3px solid var(--color-theme-1);
  }

  .pin {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-theme-1);
    border-radius: 50%;
  }
</style>
