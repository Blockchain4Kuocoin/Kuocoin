import "core-js/stable";
import "core-js/es/set";
import "core-js/es/map";
import "regenerator-runtime/runtime";
import "raf/polyfill";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootReducer, rootSaga } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
// import ToastsPop from "./Components/Explorer/BlockHash copy";
// import Test from "./Components/Explorer/BlockHash copy";

// import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        {/* <Test /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
