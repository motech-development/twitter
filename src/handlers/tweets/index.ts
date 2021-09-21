export default {
  events: [
    {
      http: {
        cors: true,
        method: 'get',
        path: 'v1/users/{id}/tweets',
        private: true,
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
