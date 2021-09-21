import type { AWS } from '@serverless/typescript';
import { tweets } from './src/handlers';

const config: AWS = {
  frameworkVersion: '2',
  functions: {
    tweets,
  },
  plugins: ['serverless-esbuild'],
  provider: {
    apiGateway: {
      apiKeys: ['${env:API_KEY}'],
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
    name: 'aws',
    region: 'eu-west-2',
    runtime: 'nodejs14.x',
  },
  service: 'twitter',
};

module.exports = config;
