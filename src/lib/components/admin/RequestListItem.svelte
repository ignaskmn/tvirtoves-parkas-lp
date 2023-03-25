<script lang="ts">
  import Read from "./Read.svelte";
  import type { Request } from "$lib/types";
  import { page } from "$app/stores";

  export let request: Request;

  const { request_id, created_at, email, objects, read } = request;

  async function onClick() {
    if (!read) {
      await $page.data.supabase
        .from("requests")
        .update({ read: true })
        .eq("request_id", request_id);
    }
  }

  const date = new Date(created_at);
</script>

<a href={`/admin/req/${request_id}`} class="request" on:click={onClick}>
  <div class="items">
    <div class="item name">{objects.name}</div>
    <div class="item email">{email}</div>
    <div class="item date">{date.toLocaleDateString()}</div>
  </div>
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
    gap: 1rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .request:hover {
    background-color: #f0f0f0;
  }

  .items {
    display: flex;
    flex-direction: row;
    flex: 3;
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

  @media (max-width: 480px) {
    .items {
      flex-direction: column;
    }

    .item:not(:first-child) {
      border-top: 1px solid black;
      padding-top: 0.5rem;
      border-left: none;
      padding-left: 0;
    }
  }
</style>
