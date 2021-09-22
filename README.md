# Twitter API

## Configuration

Before deploying the API, you will need to set the following environment variables

- `API_KEY` - The API key for the API
- `TWITTER_BEARER_TOKEN` - The bearer token from your Twitter developer project

Please also ensure your AWS credentials are set up

## Build Setup

```bash
# install dependencies
$ yarn install

# serve at localhost:3000
$ yarn start

# deploy to production environment
$ yarn deploy --stage production

# teardown production environment
$ yarn teardown --stage production
```

## Endpoints

### `v1/users/{id}/tweets`

This returns the Tweets for a specific user
