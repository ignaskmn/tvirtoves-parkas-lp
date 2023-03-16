import { persisted } from "svelte-local-storage-store";

export const activePage = persisted("activePage", 0);

export const pageStates = persisted("pageStates", [0, 0, 0], {
  storage: "session",
});

export const form = persisted("form", {
  object: "",
  activity: "",
  description: "",
  services: [],
  firstName: "",
  phone: "",
  email: "",
  organization: "",
});

export const services = persisted("services", [{ value: "", label: "" }]);
// export function resetForm() {
//   form.set({
//     object: "",
//     activity: "",
//     description: "",
//     services: [],
//     firstName: "",
//     phone: "",
//     email: "",
//     organization: "",
//   });
// }
