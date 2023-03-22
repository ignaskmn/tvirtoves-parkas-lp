export const objects = [
  {
    id: 1,
    name: "Parakas",
    description: "Lorem ipsum",
    images: "$lib/images/parakas",
    services: [
      {
        value: "wc",
        label: "wc",
      },
      {
        value: "garsas",
        label: "Garso aparatūra",
      },
    ],
  },
];

export const requests = [
  {
    request_id: 43,
    created_at: "2021-05-01T12:00:00.000Z",
    objects: {
      name: "Parakas",
    },
    read: false,
  },
  {
    request_id: 44,
    created_at: "2022-05-01T12:00:00.000Z",
    objects: {
      name: "I Fortas",
    },
    read: false,
  },
  {
    request_id: 45,
    created_at: "2023-05-01T12:00:00.000Z",
    objects: {
      name: "VIII Fortas",
    },
    read: false,
  },
];
