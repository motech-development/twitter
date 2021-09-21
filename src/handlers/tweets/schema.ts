export const body = {
  properties: {},
  required: [],
  type: 'object',
} as const;

export const pathParameters = {
  properties: {
    id: {
      type: 'string',
    },
  },
  required: ['id'],
  type: 'object',
} as const;
