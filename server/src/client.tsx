import { loadableReady } from '@loadable/component';
import React from 'react';
import { hydrate } from 'react-dom';

import App from '@server/app';

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<App />, root);
});
