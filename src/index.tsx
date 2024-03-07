import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { themes } from '@/styles';
import { setupStore } from '@/store';

import App from './app';
import reportWebVitals from './reportWebVitals';

import '@/i18n';
import '@/sentry';

export const store = setupStore();

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* TODO: Support dark theme if time allows */}
        <ChakraProvider theme={themes.homeLight}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
