import { body } from './schema';

export default {
  events: [
    {
      http: {
        method: 'get',
        path: 'v1/users/{id}/tweets',
        request: {
          parameters: {
            paths: {
              id: true,
            },
          },
          schemas: {
            'application/json': body,
          },
        },
      },
    },
  ],
  handler: 'src/handlers/tweets/handler.get',
};
