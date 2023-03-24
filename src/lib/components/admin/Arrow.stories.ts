import type { Meta, StoryObj } from "@storybook/svelte";
import Arrow from "./Arrow.svelte";

const meta = {
  title: "Admin/Arrow",
  component: Arrow,
  args: {
    width: 2,
    left: false,
    isActive: false,
  },
} satisfies Meta<Arrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
