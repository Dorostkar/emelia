import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {
  indigo100,
  indigo500,
  indigo700,
  redA200
} from "material-ui/styles/colors";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// make a custom theme for our app
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    primary2Color: indigo500,
    accent1Color: redA200,
    pickerHeaderColor: indigo500
  }
});
ReactDom.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.querySelector("#root")
);
