import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { rootReducer as reducer } from "../../store/root-reducer";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = createStore(reducer, preloadedState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
