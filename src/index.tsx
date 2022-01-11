import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'Root';
import { AppProviders } from 'providers/AppProviders';

import 'utils/firebase';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
