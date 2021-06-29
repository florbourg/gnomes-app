import React from "react";
import { render } from "@testing-library/react";
import CardGnome from "./CardGnome";
import { ThemeProvider } from "../../styles/theme";

test("renders component", () => {
  const item = {
    age: 80,
    friends: ["Emmadette Voidrocket", "Whitwright Mystbuster"],
    hair_color: "Gray",
    height: 96.72526,
    id: 1017,
    name: "Emmadette Gyrobuster",
    professions: [
      "Brewer",
      "Medic",
      "Baker",
      "Smelter",
      "Cook",
      "Woodcarver",
      "Tailor",
    ],
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/20000/nahled/stingray.jpg",
    weight: 40.44189,
  };
  const component = render(
    <ThemeProvider>
      <CardGnome item={item} />
    </ThemeProvider>
  );

  // Check if item.map works ok
  component.getByText(/Emmadette Gyrobuster/i);
  // Check if friends.map works ok
  component.getByText(/Emmadette Voidrocket/i);
  // Check if img component renders ok
  component.getByTitle(/Profile Image/i);
});
