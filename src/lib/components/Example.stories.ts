import type { Meta, StoryObj } from "@storybook/svelte";
import Example from "./Example.svelte";

const meta = {
  title: "Examples/Example",
  component: Example,
  args: {},
} satisfies Meta<Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
