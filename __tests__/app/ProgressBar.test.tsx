import ProgressBar from "../../src/components/atoms/ProgressBar"
import { render } from "@testing-library/react";

describe("ProgressBar", () => {
  it("Should be in the document", () => {
    const component = render(<ProgressBar percentage={10} />);
    expect(component).toBeTruthy();
  });
  it("Should render the percentage of progress bar", () => {
    const props = {
      percentage: 10
    };
    const { getByText } = render(<ProgressBar {...props} />);
    const percentageText = getByText(`${props.percentage}%`);
    expect(percentageText).toBeTruthy();
  });
});
