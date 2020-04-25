import RESTClient, { RESTClientConfig } from './RESTClient';

/**
 * Instance of RESTClient to make calls to the main website API.
 *
 * @class {APIClient}
 */
export default class extends RESTClient {
  constructor(config: RESTClientConfig) {
    const authorization = ''; // getCookie('website_jwt');
    super({ ...config, authorization });
  }
}
