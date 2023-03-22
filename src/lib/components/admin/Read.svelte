<script lang="ts">
  export let read: boolean;
</script>

<div class="box">
  {#if read}
    <svg
      width="2.5rem"
      height="2.5rem"
      x="6.5"
      y="6.5"
      viewBox="0 0 37 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9918 20.2628L33.5248 0.727692L36.5317 3.73244L13.9918 26.2723L0.468323 12.7488L3.47307 9.74407L13.9918 20.2628Z"
        fill="#255c00"
      />
    </svg>
  {/if}
</div>

<style>
  .box {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid black;
    border-radius: 0.25rem;
    background-color: white;
  }

  svg {
    left: -0.5rem;
    top: -0.75rem;
    position: absolute;
  }
</style>
