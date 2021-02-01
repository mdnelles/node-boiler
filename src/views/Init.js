import "react-native";
import renderer from "react-test-renderer";

import Init from "../Init";

describe("<Init />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Init {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
