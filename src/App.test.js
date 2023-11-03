import { act, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initState = {};
const store = mockStore(initState);

test("renders learn react link", () => {
  expect(
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  ).toMatchSnapshot();
});
