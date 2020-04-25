export interface RESTClientConfig {
  baseUrl: string;
  authorization?: string | null;
}

export interface RequestQuery {
  [key: string]: any;
}

export interface RequestBody {
  [key: string]: any;
}

export interface Response {
  data: any;
  status: number;
}

export interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  query?: RequestQuery;
  body?: RequestBody;
}

export type GetOptions = Pick<FetchOptions, 'query'>;
export type PostOptions = Pick<FetchOptions, 'body'>;
export type PutOptions = Pick<FetchOptions, 'body'>;

/**
 * @class {RESTClient}
 */
export default class {
  private config: RESTClientConfig;

  constructor(config: RESTClientConfig) {
    const defaults = {
      baseUrl: '',
      authorization: null
    };

    this.config = {
      ...defaults,
      ...config
    };
  }

  /**
   * Send a GET request to the supplied URL.
   *
   * @param {string} url
   * @param {GetOptions} options
   */
  public async get(url: string, options?: GetOptions): Promise<Response> {
    try {
      return await this.fetch(url, {
        method: 'GET',
        query: options?.query
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * Send a POST request to the supplied URL.
   *
   * @param {string} url
   * @param {PostOptions} options
   */
  public async post(url: string, options?: PostOptions): Promise<Response> {
    try {
      return await this.fetch(url, {
        method: 'POST',
        body: options?.body
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * Send a PUT request to the supplied URL.
   *
   * @param {string} url
   * @param {PutOptions} options
   */
  public async put(url: string, options?: PutOptions): Promise<Response> {
    try {
      return await this.fetch(url, {
        method: 'PUT',
        body: options?.body
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * Send a DELETE request to the supplied URL.
   *
   * @param {string} url
   */
  public async delete(url: string) {
    try {
      return await this.fetch(url, {
        method: 'DELETE'
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * General fetch function to be used by method shorthands.
   *
   * @param {string} url
   * @param {FetchOptions} options
   */
  private fetch(
    url: string,
    { method, query, body }: FetchOptions
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const xml = new XMLHttpRequest();
      const OKStatus = [200, 201, 202, 204];

      xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
          const response: Response = {
            data: xml.response,
            status: xml.status
          };

          if (OKStatus.includes(xml.status)) {
            resolve(response);
          } else {
            reject(response);
          }
        }
      };

      const queryString = method === 'GET' && query && JSON.stringify(query);
      const bodyString = body && JSON.stringify(body);

      xml.open(method, `${this.config.baseUrl}${url}`);

      xml.send(queryString || bodyString);
    });
  }
}
