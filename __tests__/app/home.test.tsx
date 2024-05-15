import Home from "@app/page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("Should be in the document", () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });
});
