import type { Meta, StoryObj } from "@storybook/svelte";
import Marker from "./Marker.svelte";

const meta = {
  title: "Components/Marker",
  component: Marker,
  args: {
    index: 1,
    isActive: false,
    state: "unfilled",
    height: 5,
  },
  argTypes: {
    state: {
      options: ["unfilled", "filling", "filled"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<Marker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
