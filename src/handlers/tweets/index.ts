export default {
  events: [
    {
      http: {
        cors: true,
        method: 'get',
        path: 'v1/users/{id}/tweets',
        request: {
          parameters: {
            paths: {
              id: true,
            },
          },
        },
      },
    },
  ],
  handler: 'src/handlers/tweets/handler.get',
};
