import type { AWS } from '@serverless/typescript';
import { tweets } from './src/handlers';

const config: AWS = {
  custom: {
    esbuild: {
      bundle: true,
      define: {
        'require.resolve': undefined,
      },
      exclude: ['aws-sdk'],
      minify: false,
      platform: 'node',
      sourcemap: true,
      target: 'node14',
    },
    prune: {
      automatic: true,
      includeLayers: true,
      number: 1,
    },
  },
  frameworkVersion: '2',
  functions: {
    tweets,
  },
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-prune-plugin',
  ],
  provider: {
    apiGateway: {
      apiKeys: [
        {
          value: '${env:API_KEY}',
        },
      ],
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      TWITTER_BEARER_TOKEN: '${env:TWITTER_BEARER_TOKEN}',
    },
    lambdaHashingVersion: '20201221',
    name: 'aws',
    region: 'eu-west-2',
    runtime: 'nodejs14.x',
  },
  service: 'twitter',
};

module.exports = config;
