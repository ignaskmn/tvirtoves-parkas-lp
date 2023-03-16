<script lang="ts">
  export let label: string = "";
  export let placeholder: string = "";
  export let name: string;
  export let value: string = "";
</script>

<div class="container">
  <label for="input">{label}</label>
  <input
    id="input"
    maxlength="50"
    type="text"
    {name}
    {placeholder}
    bind:value
  />
</div>

<style>
  .container {
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border: 1px solid #d8d8d8;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    font-family: var(--font-body);
  }

  input:focus {
    outline: none;
    border: 1px solid var(--color-theme-1);
  }
</style>
