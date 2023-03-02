import type { Meta, StoryObj } from "@storybook/svelte";
import Map from "./Map.svelte";

const meta = {
  title: "Components/Map",
  component: Map,
  args: {
    width: 500,
  },
} satisfies Meta<Map>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
