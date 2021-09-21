import axios from 'axios';
import type { AxiosInstance } from 'axios';
import twitter from 'twitter-text';

interface IData<T> {
  data: T[];
}

interface ITimeline {
  id: string;
  text: string;
}

interface ITimelineOpts {
  end_time?: string;
  exclude?: string;
  expansions?: string;
  max_results?: number;
  'media.fields'?: string;
  pagination_token?: string;
  'place.fields'?: string;
  'poll.fields'?: string;
  since_id?: string;
  start_time?: string;
  'tweet.fields'?: string;
  until_id?: string;
  'user.fields'?: string;
}

class Twitter {
  private client: AxiosInstance;

  constructor() {
    const { TWITTER_BEARER_TOKEN } = process.env;

    if (!TWITTER_BEARER_TOKEN) {
      throw new Error('TWITTER_BEARER_TOKEN not set');
    }

    this.client = axios.create({
      baseURL: 'https://api.twitter.com',
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });
  }

  public async timeline(
    id: string,
    params?: ITimelineOpts,
  ): Promise<IData<ITimeline>> {
    const { data } = await this.client.get<IData<ITimeline>>(
      `2/users/${id}/tweets`,
      {
        params,
      },
    );
    const formatted = data.data.map(({ text, ...rest }) => ({
      text: twitter.autoLink(text, {}),
      ...rest,
    }));

    return {
      data: formatted,
    };
  }
}

export default Twitter;
