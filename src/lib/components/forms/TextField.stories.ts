import type { Meta, StoryObj } from "@storybook/svelte";
import TextField from "./TextField.svelte";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  args: {},
} satisfies Meta<TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
