import React from "react";
import { render } from "@testing-library/react";
import SelectField from "./SelectField";
import { ThemeProvider } from "../../styles/theme";

test("renders component", () => {
  const title = "Hair Color";
  const options = [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    "Tinker",
    "Tailor",
    "Potter",
    "Brewer",
    "Medic",
  ];
  const component = render(
    <ThemeProvider>
      <SelectField options={options} state={"Stonecarver"} title={title} />
    </ThemeProvider>
  );

  // Check if item.map works ok
  component.getByText(/Metalworker/i);
  // Check if input label renders ok
  component.getAllByLabelText(/Hair Color/i);
});
