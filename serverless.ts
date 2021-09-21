import type { AWS } from '@serverless/typescript';

const config: AWS = {
  frameworkVersion: '2',
  functions: {},
  plugins: ['serverless-esbuild'],
  provider: {
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    name: 'aws',
    runtime: 'nodejs14.x',
  },
  service: 'twitter',
};

module.exports = config;
