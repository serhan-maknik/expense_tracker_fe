import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import rootReducer from "./store";
import Sleeper from "./Sleeper";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
