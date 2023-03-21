<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";

  export let data: Request;

  type Request = {
    objects: [
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
  const deconstruct = data.objects;
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
    const { data } = await supabase
      .from("services")
      .select(`label`)
      .in("service_id", services);
    console.log("onMount");
    console.log(data);
  });
</script>
