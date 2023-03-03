export type State = "unfilled" | "filling" | "filled";

export type Page = {
  index: number;
  state: State;
};
