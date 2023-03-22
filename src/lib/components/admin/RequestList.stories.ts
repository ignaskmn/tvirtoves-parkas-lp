import type { Meta, StoryObj } from "@storybook/svelte";
import RequestList from "./RequestList.svelte";

const meta = {
  title: "Admin/RequestList",
  component: RequestList,
  args: {
    requests: [
      {
        request_id: 43,
        created_at: "2021-05-01T12:00:00.000Z",
        email: "one@throw.thr",
        objects: {
          name: "Parakas",
        },
        read: false,
      },
      {
        request_id: 44,
        created_at: "2022-05-01T12:00:00.000Z",
        email: "two@blow.bom",
        objects: {
          name: "I Fortas",
        },
        read: true,
      },
      {
        request_id: 45,
        created_at: "2023-05-01T12:00:00.000Z",
        email: "three@blow.rom",
        objects: {
          name: "VIII Fortas",
        },
        read: false,
      },
    ],
  },
} satisfies Meta<RequestList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
