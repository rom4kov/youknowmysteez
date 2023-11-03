import Directory from "./directory.component";
import { shallow } from "enzyme";

it("properly render Directory component", () => {
  expect(shallow(<Directory />)).toMatchSnapshot();
});
