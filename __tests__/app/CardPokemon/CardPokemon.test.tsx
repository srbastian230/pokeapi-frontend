import CardPokemon from "../../../src/components/CardPokemon"
import { render } from "@testing-library/react";
import { mockPokemon } from "../../__mocks__/mockData";

describe("CardPokemon", () => {
  it("Should be in the document", () => {
    const component = render(<CardPokemon pokemon={mockPokemon} />);
    expect(component).toBeTruthy();
  });
  it("Should render the alt pokemon image", () => {
    const component = render(<CardPokemon pokemon={mockPokemon} />);
    const image = component.getByAltText(`Pokemon ${mockPokemon.name}`);
    expect(image).toBeTruthy();
  });
  it("Should render the alt pokemon id", () => {
    const component = render(<CardPokemon pokemon={mockPokemon} />);
    const idText = component.getByText(`N° ${mockPokemon.id}`);
    expect(idText).toBeTruthy();
  });
});
