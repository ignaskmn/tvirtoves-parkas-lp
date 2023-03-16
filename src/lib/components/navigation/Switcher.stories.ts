import type { Meta, StoryObj } from "@storybook/svelte";
import Switcher from "./Switcher.svelte";

const meta = {
  title: "Navigation/Switcher",
  component: Switcher,
  args: {},
} satisfies Meta<Switcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
