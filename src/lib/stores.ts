import { persisted } from "svelte-local-storage-store";

export const page = persisted("page", 0);

export const pages = persisted("pages", [
  { index: 1, state: "unfilled" },
  { index: 2, state: "filling" },
  { index: 3, state: "filled" },
]);

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
