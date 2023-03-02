<script lang="ts">
  import { supabase } from "$lib/supabaseClient";

  type Example = {
    label: string;
  };

  export let data: { examples: Example[] };

  let { examples } = data;

  $: examples;

  const handleClick = async () => {
    const { data, error } = await supabase
      .from("examples")
      .insert({ label: "Denmark" })
      .select();

    // push the new example to the array
    if (data) {
      examples = [...examples, data[0] as Example];
    }

    console.log(examples);
  };
</script>

<ul>
  {#each examples as example}
    <li>{example.label}</li>
  {/each}
  <button on:click={handleClick}>ADD</button>
</ul>
