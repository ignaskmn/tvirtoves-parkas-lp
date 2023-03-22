import type { Meta, StoryObj } from "@storybook/svelte";
import RequestPage from "./+page.svelte";

const meta = {
  title: "Admin/RequestPage",
  component: RequestPage,
  args: {
    data: {
      requests: [
        {
          activities: {
            label: "Label",
          },
          created_at: "2021-05-01T12:00:00.000Z",
          description: "Description",
          email: "Email",
          firstName: "FirstName",
          objects: {
            name: "Object Name",
          },
          organization: "Organization",
          phone: "Phone",
          read: true,
          services: [1, 2],
        },
      ],
    },
  },
} satisfies Meta<RequestPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
