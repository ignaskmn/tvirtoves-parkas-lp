<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";

  export let data: Request;

  let serviceNames: string[] = [];
  type Request = {
    requests: [
      {
        activities: {
          label: string;
        };
        created_at: string;
        description: string;
        email: string;
        firstName: string;
        objects: {
          name: string;
        };
        organization: string;
        phone: string;
        read: boolean;
        services: number[];
      }
    ];
  };

  //named deconstruct because need to reserve objects for later deconstruction
  const deconstruct = data.requests;
  const {
    activities,
    services,
    created_at,
    description,
    email,
    firstName,
    objects,
    organization,
    phone,
    read,
  } = deconstruct[0];

  onMount(async () => {
    // const { data } = await supabase
    //   .from("services")
    //   .select(`label`)
    //   .in("service_id", services);
    // console.log("onMount");
    // console.log(data);
    const data = [
      {
        label: "service1",
      },
      {
        label: "service2",
      },
    ];

    serviceNames = data.map((service) => service.label);
  });
</script>

<div class="requests__container">
  <div class="category">
    <div class="label">Objektas</div>
    <div class="value">{objects.name}</div>
  </div>
  <div class="category">
    <div class="label">Reikaliamos paslaugos</div>
    <div class="value">
      {#each serviceNames as serviceName}
        <div class="service">{serviceName}</div>
        <div class="service__break">/</div>
      {/each}
    </div>
  </div>
  <div class="category">
    <div class="label">Veikla</div>
    <div class="value">{activities.label}</div>
  </div>
  <div class="category">
    <div class="label">Aprašymas</div>
    <div class="value">{description}</div>
  </div>
  <br />
  <div class="category">
    <div class="label">Kontaktinis asmuo</div>
    <div class="value">{firstName}</div>
  </div>
  <div class="category">
    <div class="label">Organizacija</div>
    <div class="value">{organization}</div>
  </div>
  <div class="category">
    <div class="label">El. paštas</div>
    <div class="value">{email}</div>
  </div>
  <div class="category">
    <div class="label">Telefono. nr.</div>
    <div class="value">{phone}</div>
  </div>
</div>

<style>
  .requests__container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 0.5rem;
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
