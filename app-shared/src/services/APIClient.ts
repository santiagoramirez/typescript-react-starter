import merge from 'lodash/merge';

import ClientFactory, { Config } from './ClientFactory';

/**
 * Instance of ClientFactory to make calls to the main website API.
 *
 * @class {APIClient}
 */
export default class APIClient extends ClientFactory {
  constructor(config: Config) {
    super(config);

    const apiConfig: Partial<Config> = {
      headers: {
        Authorization: this.authToken
      }
    };

    this.config = merge(config, apiConfig);
  }

  private get authToken(): string {
    return 'authtoken'; // getCookie('user.jwt');
  }
}
