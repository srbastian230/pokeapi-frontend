import Header from "../../src/components/Header"
import { render } from "@testing-library/react";

describe("Header", () => {
  it("Should be in the document", () => {
    const component = render(<Header />);
    expect(component).toBeTruthy();
  });
  it("Should render the Pokedex logo", () => {
    const { getByAltText } = render(<Header />);
    const image = getByAltText('Logo Pokedex');
    expect(image).toBeTruthy();
  });
});
