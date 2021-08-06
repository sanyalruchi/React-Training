import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from './Store';
import {Suspense} from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain,clientId, "clientId")
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
  <Provider store= {store}>
    <Suspense fallback={LoadingSpinner}>
      <App/>
    </Suspense>
  </Provider>
  </Auth0Provider>
 ,
  document.getElementById("root")
);


