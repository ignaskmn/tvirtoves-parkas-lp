<script lang="ts">
  import Read from "./Read.svelte";
  import type { Request } from "$lib/types";
  import { supabase } from "$lib/supabaseClient";

  export let request: Request;

  const { request_id, created_at, email, objects, read } = request;

  function onClick() {
    if (!read) {
      supabase
        .from("requests")
        .update({ read: true })
        .eq("request_id", request_id);
    }
  }

  const date = new Date(created_at);
</script>

<a href={`/admin/${request_id}`} class="request" on:click={onClick}>
  <div class="item">{objects.name}</div>
  <div class="item">{email}</div>
  <div class="item date">{date.toLocaleDateString()}</div>
  <div class="read">
    <Read {read} />
  </div>
</a>

<style>
  .request {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.25rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .request:hover {
    background-color: #f0f0f0;
  }

  .item {
    flex: 1;
    width: auto;
    overflow: hidden;
  }

  .item:not(:first-child) {
    padding-left: 0.5rem;
    border-left: 1px solid black;
  }

  @media (max-width: 768px) {
    .date {
      display: none;
    }

    .item {
      flex: 1;
    }
  }
</style>
