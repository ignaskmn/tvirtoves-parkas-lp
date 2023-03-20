import type { Meta, StoryObj } from "@storybook/svelte";
import MapMarker from "./MapMarker.svelte";

const meta = {
  title: "Map/MapMarker",
  component: MapMarker,
  args: {
    lat: 0,
    lng: 0,
    width: 1.5,
  },
} satisfies Meta<MapMarker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
