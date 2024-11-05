import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/StoreContext.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "./helpers/scroolToTop.ts";

let persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ScrollToTop />
          <App />
        </PersistGate>
      </BrowserRouter>
    </ContextProvider>
  </Provider>,
);
