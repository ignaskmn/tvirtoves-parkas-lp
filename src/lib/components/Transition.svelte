<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let refresh = ``;
</script>

{#key refresh}
  <!-- You can modify the in:fly and out:fly attributes to your liking! -->
  <div
    in:fly={{ delay: 100, duration: 200, y: -10 }}
    out:fly={{ duration: 100, y: 10 }}
  >
    <slot />
  </div>
{/key}
