import type { Meta, StoryObj } from "@storybook/svelte";
import Second from "./Second.svelte";

const meta = {
  title: "Pages/Second",
  component: Second,
  args: {},
} satisfies Meta<Second>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
