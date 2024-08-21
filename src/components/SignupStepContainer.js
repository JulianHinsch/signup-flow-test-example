import { useMemo } from "react";
import { useSignupState } from "../hooks";
import FirstNameStep from "./FirstNameStep";
import LastNameStep from "./LastNameStep";
import AgeStep from "./AgeStep";
import CompleteStep from "./CompleteStep";

const STEPS = {
  FIRST_NAME: "FIRST_NAME",
  LAST_NAME: "LAST_NAME",
  AGE: "AGE",
  COMPLETE: "COMPLETE",
};

function SignupStepContainer() {
  const state = useSignupState();

  // All conditional logic goes here
  const currentStep = useMemo(() => {
    if (!state.firstName) {
        return STEPS.FIRST_NAME;
    }
    if (!state.lastName) {
        return STEPS.LAST_NAME;
    }
    if (!state.age) {
        return STEPS.AGE;
    }
    return STEPS.COMPLETE;
  }, [state]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.FIRST_NAME:
        return <FirstNameStep></FirstNameStep>;
      case STEPS.LAST_NAME:
        return <LastNameStep></LastNameStep>;
      case STEPS.AGE:
        return <AgeStep></AgeStep>;
      default:
        return <CompleteStep></CompleteStep>;
    }
  };

  return <div>{renderCurrentStep()}</div>;
}

export default SignupStepContainer;
