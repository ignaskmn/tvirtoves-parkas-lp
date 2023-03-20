import type { Meta, StoryObj } from "@storybook/svelte";
import MapWithMarkers from "./MapWithMarkers.svelte";

const meta = {
  title: "Map/MapWithMarkers",
  component: MapWithMarkers,
  args: {},
} satisfies Meta<MapWithMarkers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
