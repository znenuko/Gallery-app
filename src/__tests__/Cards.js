import axios from "axios";
import { render, screen } from "@testing-library/react";
import Cards from "../components/Cards";
import { images } from "../__mocks__/images";

describe("<Container />", () => {
  it("Snapshot principal", () => {
    render(<Cards />);

    expect(screen.getByLabelText("imagenes")).toMatchSnapshot();
  });

  it("Carga contenido de la API", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: images });

    render(<Cards />);

    const res = await screen.findAllByLabelText("img");

    expect(res).toHaveLength(10);
  });
});
