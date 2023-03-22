import type { Meta, StoryObj } from "@storybook/svelte";
import Read from "./Read.svelte";

const meta = {
  title: "Admin/Read",
  component: Read,
  args: {
    read: false,
  },
  argTypes: {
    read: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<Read>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
