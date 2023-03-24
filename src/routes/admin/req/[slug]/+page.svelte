<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import type { Request } from "$lib/types";

  export let data: { requests: Request[] };

  let serviceNames: string[] = [];

  //named deconstruct because need to reserve objects for later deconstruction
  const deconstruct = data.requests;
  const {
    activities,
    services,
    description,
    email,
    firstName,
    objects,
    organization,
    phone,
  } = deconstruct[0];

  onMount(async () => {
    if (!services) return;
    const { data } = await supabase
      .from("services")
      .select(`label`)
      .in("service_id", services);
    if (!data) return;
    serviceNames = data.map((service) => service.label);
  });

  const name = objects.name;
  const label = activities?.label;
</script>

<div class="requests__container">
  <a href="/admin/req">Atgal</a>
  <div class="category">
    <div class="label">Objektas</div>
    <div class="value">{name}</div>
  </div>
  {#if serviceNames.length > 0}
    <div class="category">
      <div class="label">Reikiamos paslaugos</div>
      <div class="value">
        {#each serviceNames as serviceName}
          <div class="service">{serviceName}</div>
          <div class="service__break">/</div>
        {/each}
      </div>
    </div>
  {/if}
  {#if label}
    <div class="category">
      <div class="label">Veikla</div>
      <div class="value">{label}</div>
    </div>
  {/if}
  {#if description}
    <div class="category">
      <div class="label">Aprašymas</div>
      <div class="value">{description}</div>
    </div>
  {/if}
  <br />
  {#if firstName}
    <div class="category">
      <div class="label">Kontaktinis asmuo</div>
      <div class="value">{firstName}</div>
    </div>
  {/if}
  {#if organization}
    <div class="category">
      <div class="label">Organizacija</div>
      <div class="value">{organization}</div>
    </div>
  {/if}
  <div class="category">
    <div class="label">El. paštas</div>
    <div class="value">{email}</div>
  </div>
  {#if phone}
    <div class="category">
      <div class="label">Telefono. nr.</div>
      <div class="value">{phone}</div>
    </div>
  {/if}
  <div class="footer" />
</div>

<style>
  a {
    font-family: var(--font-body);
    width: fit-content;
    font-weight: 500;
    border-radius: 0.3rem;
    border: 1px solid var(--color-theme-2);
    color: var(--color-theme-2);
    font-size: 1.5rem;
    padding: 0.5rem 3rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    margin: 0 0 1rem 0;
  }

  a:hover {
    background-color: #e9f0e5;
    color: var(--color-theme-2);
  }

  .requests__container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 0.5rem;
    width: 1024px;
    padding: 2rem;
  }

  .category {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }

  .label {
    font-weight: bold;
    flex: 1;
  }

  .value {
    flex: 2;
    border-left: 1px solid black;
    padding-left: 0.5rem;
  }

  .service {
    display: inline-block;
  }

  .service__break {
    display: inline-block;
  }

  .service:not(:first-child) {
    margin-left: 0.5rem;
  }

  .service__break:last-child {
    display: none;
  }

  .footer {
    display: inline-block;
    min-height: 2rem;
  }

  @media (max-width: 768px) {
    .category {
      flex-direction: column;
    }

    .value {
      border-top: 1px solid black;
      padding-top: 0.5rem;
      border-left: none;
      padding-left: 0;
    }
  }
</style>
