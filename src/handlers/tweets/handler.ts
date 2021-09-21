import { handler, response } from '../../utils/handler';
import Twitter from '../../utils/twitter';
import { body, pathParameters } from './schema';

export const get = handler<typeof body, typeof pathParameters>(
  async (event) => {
    const twitter = new Twitter();
    const { id } = event.pathParameters;
    const data = await twitter.timeline(id, {
      max_results: 5,
    });

    return response(data, 200);
  },
);
