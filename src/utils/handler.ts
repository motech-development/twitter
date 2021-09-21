import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';
import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

type TValidatedAPIGatewayProxyEvent<TBody, TPathParameters> = Omit<
  APIGatewayProxyEvent,
  'body' | 'pathParameters'
> & {
  body: FromSchema<TBody>;
  pathParameters: FromSchema<TPathParameters>;
};

type TValidatedEventAPIGatewayProxyEvent<TBody, TPathParameters> = Handler<
  TValidatedAPIGatewayProxyEvent<TBody, TPathParameters>,
  APIGatewayProxyResult
>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handler = <TBody, TPathParameters>(
  h: TValidatedEventAPIGatewayProxyEvent<TBody, TPathParameters>,
) => middy(h).use(middyJsonBodyParser());

export const response = <T>(
  body: T,
  statusCode: number,
): APIGatewayProxyResult => ({
  body: JSON.stringify(body),
  statusCode,
});
