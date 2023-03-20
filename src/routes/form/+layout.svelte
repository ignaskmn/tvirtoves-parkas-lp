<script>
  import Header from "./Header.svelte";
  import "../styles.css";
  import { fly } from "svelte/transition";
  import { activePage } from "$lib/stores";

  export let data;

  $: currentPath = activePage.set(parseInt(data.currentPath[6]));
</script>

<div class="form-container">
  <Header />

  <div class="form">
    {#key data.currentPath}
      <div
        class="page-container"
        in:fly={{ x: 30, duration: 200, delay: 150 }}
        out:fly={{ x: -30, duration: 150 }}
      >
        <slot />
      </div>
    {/key}
  </div>
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    /* background-color: beige; */
    width: 960px;
  }

  .form {
    flex-grow: 1;
  }

  .page-container {
    height: 100%;
    width: 90vw;
  }

  @media (min-width: 768px) {
    .page-container {
      width: 480px;
    }

    /* .page-container {
      width: 33vw;
      height: 92%;
    } */
  }
</style>
