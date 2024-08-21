import { BrowserRouter } from "react-router-dom";
import SignupStepContainer from "./components/SignupStepContainer";
import { SignupStoreProvider } from "./store";


function App() {
  return (
    <BrowserRouter>
      <SignupStoreProvider>
        <SignupStepContainer />
      </SignupStoreProvider>
    </BrowserRouter>
  );
}

export default App;
