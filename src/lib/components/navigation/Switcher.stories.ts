import type { Meta, StoryObj } from "@storybook/svelte";
import Switcher from "./Switcher.svelte";

const meta = {
  title: "Navigation/Switcher",
  component: Switcher,
  args: {
    pages: [
      { index: 1, state: "unfilled" },
      { index: 2, state: "unfilled" },
      { index: 3, state: "unfilled" },
    ],
  },
} satisfies Meta<Switcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
