export type State = "unfilled" | "filling" | "filled";

// export enum State {
//   Unfilled = 0,
//   Filling = 1,
//   Filled = 2,
// }

export type Page = {
  index: number;
  state: State;
};

export type Color = "true" | "false";

export type Colors = {
  [key in State]: {
    [key in Color]: string;
  };
};

export type Service = {
  label: string;
  value: string;
};

export type Object = {
  object_id: number;
  name: string;
  images: string;
  description: string;
};

export type Activity = {
  activity_id: number;
  label: string;
};

export type Form = {
  id: string;
  read: boolean;
  object: string; // Object.id
  activity: string;
  description: string;
  services: Service[];
  firstName: string;
  phone: string;
  email: string;
  organization: string;
};

export type Request = {
  request_id?: number;
  activities?: {
    label: string;
  };
  created_at: string;
  description?: string;
  email: string;
  firstName?: string;
  objects: {
    name: string;
  };
  organization?: string;
  phone?: string;
  read: boolean;
  services?: number[];
};
