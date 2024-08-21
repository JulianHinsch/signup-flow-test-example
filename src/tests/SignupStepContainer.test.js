import { render, screen } from "@testing-library/react";
import SignupStepContainer from "../components/SignupStepContainer";
import { SignupStateContext } from "../store";
import { BrowserRouter } from "react-router-dom";

describe("Signup Step Container", () => {
  it("renders the first name step when there is no first name", () => {
    render(
      <BrowserRouter>
        <SignupStateContext.Provider value={{ state: {} }}>
          <SignupStepContainer />
        </SignupStateContext.Provider>
      </BrowserRouter>
    );
    const label = screen.getByText("first name");
    expect(label).toBeInTheDocument();
  });

  it("renders the last name step when there is a first name but no last name", () => {
    render(
      <BrowserRouter>
        <SignupStateContext.Provider value={{ state: { firstName: "test" } }}>
          <SignupStepContainer />
        </SignupStateContext.Provider>
      </BrowserRouter>
    );
    const label = screen.getByText("last name");
    expect(label).toBeInTheDocument();
  });

  it("renders the age name step when there is a first name, last name, but no age", () => {
    render(
      <BrowserRouter>
        <SignupStateContext.Provider
          value={{ state: { firstName: "test", lastName: "testerson" } }}
        >
          <SignupStepContainer />
        </SignupStateContext.Provider>
      </BrowserRouter>
    );
    const label = screen.getByText("age");
    expect(label).toBeInTheDocument();
  });

  it("renders the complete step when all data is present", () => {
    render(
      <BrowserRouter>
        <SignupStateContext.Provider
          value={{
            state: { firstName: "test", lastName: "testerson", age: 12 },
          }}
        >
          <SignupStepContainer />
        </SignupStateContext.Provider>
      </BrowserRouter>
    );
    const label = screen.getByText("signup complete! 🎉");
    expect(label).toBeInTheDocument();
  });
});
