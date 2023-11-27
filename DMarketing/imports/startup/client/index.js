import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../../ui/layouts/App';

i18n.setLocale('en');
T = i18n.createComponent();

Sentry.init({
  dsn: Meteor.settings.public.SENTRY.DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const AppComponent = () => <App />;

Meteor.startup(() => {
  render(<AppComponent />, document.getElementById('react-root'));
});
