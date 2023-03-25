<script lang="ts">
  import { page } from "$app/stores";
  export let data: { examples: Example[] };

  type Example = {
    id: number;
    created_at: string;
    label: string;
  };

  const { examples } = data;

  async function handleClick() {
    console.log("clicked");

    const { data: examples } = await $page.data.supabase
      .from("examples")
      .select();

    console.log(examples);
  }
</script>

<div class="container">
  {#each examples as example}
    <div>{example.label}</div>
  {/each}
  <button on:click={handleClick}>Check</button>
</div>

<style>
  button {
    width: 9rem;
    height: 3rem;
  }
</style>
