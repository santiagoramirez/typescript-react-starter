import { QueryObject, stringify } from '@app-shared/utils/querystring';

export interface Config {
  baseUrl?: string;
  headers?: { [key: string]: string };
}

export interface FetchOptions extends Config {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: QueryObject;
  body?: QueryObject;
}

export type GetOptions = Omit<FetchOptions, 'url' | 'method' | 'body'>;
export type PostOptions = Omit<FetchOptions, 'url' | 'method' | 'params'>;

export interface Response {
  data: any;
  status: number;
}

/**
 * @class {ClientFactory}
 */
export default class {
  public config: Config;

  constructor(config: Config) {
    const defaults = {
      baseUrl: ''
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
  public async get(url: string, options: GetOptions = {}): Promise<Response> {
    try {
      return await this.fetch({
        url,
        method: 'GET',
        ...options
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
  public async post(url: string, options: PostOptions = {}): Promise<Response> {
    try {
      return await this.fetch({
        url,
        method: 'POST',
        ...options
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
  public async put(url: string, options: PostOptions = {}): Promise<Response> {
    try {
      return await this.fetch({
        url,
        method: 'PUT',
        ...options
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
      return await this.fetch({
        url,
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
  private fetch(options: FetchOptions): Promise<Response> {
    const config = { ...this.config, ...options };

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          const response: Response = {
            data: request.response,
            status: request.status
          };

          if ([200, 201, 202, 204].includes(request.status)) {
            resolve(response);
          } else {
            reject(response);
          }
        }
      };

      if (config?.headers) {
        Object.entries(config.headers).forEach(([key, value]) => {
          request.setRequestHeader(key, value);
        });
      }

      const paramsString: string | undefined =
        config?.params && stringify(config.params);

      const bodyString: string | undefined =
        config?.body && stringify(config.body);

      request.open(config.method, `${config.baseUrl}${config.url}`);
      request.send(paramsString || bodyString);
    });
  }
}
