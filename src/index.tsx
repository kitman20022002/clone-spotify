import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
