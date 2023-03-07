<script lang="ts">
  export let label: string = "";
  export let name: string = "";
  export let value: string = "";
</script>

<div class="container">
  <label for="textarea">{label}</label>
  <textarea id="textarea" {name} {value} />
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

  textarea {
    display: block;
    width: 100%;
    height: 6.5rem;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border: 1px solid #d8d8d8;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: var(--font-body);
    resize: none;
  }

  textarea:focus {
    outline: none;
    border: 1px solid var(--color-theme-1);
  }
</style>
