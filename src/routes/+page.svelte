<script lang="ts">
  import First from "$lib/components/pages/First.svelte";
  import Second from "$lib/components/pages/Second.svelte";
  import Third from "$lib/components/pages/Third.svelte";

  type Example = {
    label: string;
  };

  export let data: { examples: Example[] };

  let { examples } = data;

  let isActive = true;
</script>

<svelte:head>
  <title>Tvirtovės Parkas - Laisvas Plotas</title>
  <meta
    name="description"
    content="Tvirtovės Parkas - Objektų užsakymo sistema"
  />
</svelte:head>

<form method="POST">
  <section>
    <div class="page-container">
      <First />
    </div>
    <div class="page-container">
      <Second />
    </div>
    <div class="page-container">
      <Third {isActive} />
    </div>
  </section>
</form>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .page-container {
    width: 33vw;
    height: 100%;
  }
</style>
