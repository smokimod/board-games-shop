import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import reducers from "./Redux/reducers/index";
import thunk from "redux-thunk";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId =
  "434607980919-1l11g0ij8onhnsfth53dh45ifoh9ubrt.apps.googleusercontent.com";
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunk)));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
