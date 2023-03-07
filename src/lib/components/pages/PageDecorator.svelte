<script lang="ts">
  import Switcher from "../navigation/Switcher.svelte";
</script>

<div class="app">
  <Switcher />
  <slot />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 320px;
  }
</style>
