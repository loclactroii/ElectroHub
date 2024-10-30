import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/StoreContext.tsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/index.ts";
import { loadState, saveState } from "./helpers/localStorageHelpers.ts";
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState(store.getState());
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </Provider>,
);
