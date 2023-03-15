<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { fly } from "svelte/transition";

  export let data;

  $: currentPath = data.currentPath.split("/")[1];
  console.log(currentPath);
</script>

<div class="app">
  <Header />

  <main>
    {#key data.currentPath}
      <div
        class="page-container"
        in:fly={{ x: 30, duration: 200, delay: 150 }}
        out:fly={{ x: -30, duration: 150 }}
      >
        <slot />
      </div>
    {/key}
  </main>
</div>

<style>
  .app {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh - 1rem;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 33vw;
    overflow: hidden;
  }

  .page-container {
    width: 33vw;
    height: 92%;
  }
</style>
