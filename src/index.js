import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>
);
