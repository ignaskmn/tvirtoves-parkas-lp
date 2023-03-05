import type { Meta, StoryObj } from "@storybook/svelte";
import Third from "./Third.svelte";

const meta = {
  title: "Pages/Third",
  component: Third,
  args: {},
} satisfies Meta<Third>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
