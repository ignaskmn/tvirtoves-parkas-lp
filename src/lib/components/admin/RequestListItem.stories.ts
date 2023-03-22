import type { Meta, StoryObj } from "@storybook/svelte";
import RequestListItem from "./RequestListItem.svelte";

const meta = {
  title: "Admin/RequestListItem",
  component: RequestListItem,
  args: {
    request: {
      request_id: 1,
      created_at: "2001-05-01T12:00:00.000Z",
      email: "email@no.com",
      objects: {
        name: "Parakas",
      },
      read: false,
    },
  },
} satisfies Meta<RequestListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
