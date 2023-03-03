<script lang="ts">
  export let label: string = "";
  export let placeholder: string = "";
  export let name: string;
</script>

<label>
  <span class="label">{label}</span>
  <input type="text" {name} {placeholder} />
</label>

<style>
  .label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1.2rem;
  }
</style>
