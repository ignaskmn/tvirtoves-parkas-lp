import { supabase } from "$lib/supabaseClient";
import type { RequestEvent } from "@sveltejs/kit";

export async function load() {
  try {
    const { data } = await supabase.from("objects").select();
    // .from("object_services")
    // .select(`object (id, name, description, images), service (id, label)`);
    return {
      objects: data ?? [],
    };
  } catch (error) {
    console.log("error", error);
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const returnData = insertData(data);
    return { success: true };
  },
};

type Service = {
  value: string;
  label: string;
};

async function insertData(formData: any) {
  // object and activity are required fields so we can safely parse them
  const object = parseInt(JSON.parse(formData.get("object")).value);
  const activity = parseInt(JSON.parse(formData.get("activity")).value);
  const services = formData.getAll("services");

  let servicesArray: string[] = [];

  // services is an optional field so we need to check if it's empty
  if (services != "") {
    const servicesJson = JSON.parse(services);
    servicesJson.forEach((service: Service) => {
      servicesArray.push(service.value);
    });
  }

  const { data, error } = await supabase
    .from("requests")
    .insert([
      {
        object: object,
        activity: activity,
        description: formData.get("description"),
        services: servicesArray,
        firstName: formData.get("firstName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        organization: formData.get("organization"),
      },
    ])
    .select();
  // console.log("data", data);
  if (error) {
    console.log("error", error);
  }

  return data;
}
