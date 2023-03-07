<script lang="ts">
  import type { State, Colors } from "$lib/types";

  export let height: number = 4;
  export let index: number = 1;
  export let isActive: boolean = false;
  export let state: State = "unfilled";
  export let onClick: () => void = () => {};

  let colors: Colors = {
    unfilled: {
      true: "#000000",
      false: "#999999",
    },
    filling: {
      true: "#F2B705",
      false: "#fae29b",
    },
    filled: {
      true: "#2c6e00",
      false: "#abc599",
    },
  };
</script>

<button on:click={onClick}>
  <svg
    width={`${height}rem`}
    height={`${height}rem`}
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="border"
  >
    <style>
      .marker-text {
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        user-select: none;
        fill: var(--color-text);
        font-family: var(--font-body);
      }
    </style>
    <rect
      x="1"
      y="1"
      width="39"
      height="39"
      rx="19.5"
      fill="white"
      stroke={colors[state][isActive ? "true" : "false"]}
      stroke-width="2"
    />
    {#if state === "filled"}
      <svg
        width="27"
        height="27"
        x="6.5"
        y="6.5"
        viewBox="0 0 37 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9918 20.2628L33.5248 0.727692L36.5317 3.73244L13.9918 26.2723L0.468323 12.7488L3.47307 9.74407L13.9918 20.2628Z"
          fill={colors[state][isActive ? "true" : "false"]}
        />
      </svg>
    {:else}
      <text
        x="50%"
        y="53%"
        text-anchor="middle"
        alignment-baseline="middle"
        class="marker-text"
        style={`fill: ${colors[state][isActive ? "true" : "false"]};`}
      >
        {index}
      </text>
    {/if}
  </svg>
</button>

<!-- </div> -->
<style>
  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 0.5rem;
    cursor: pointer;
    position: relative;
  }

  button:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: var(--gap);
    border: solid 0.1rem var(--color-text);
    pointer-events: none;
    z-index: -1;
  }
</style>
