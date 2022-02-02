import React from "react";
import { shallow } from "enzyme";
import Neworder from "./neworder";

describe("Neworder", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Neworder />);
    expect(wrapper).toMatchSnapshot();
  });
});
