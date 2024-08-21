import {  useContext } from "react";
import { SignupStateContext, SignupDispatchContext } from "./store";

export const useSignupDispatch = () => {
  const { dispatch } = useContext(SignupDispatchContext);
  return dispatch;
};

export const useSignupState = () => {
  const { state } = useContext(SignupStateContext);
  return state;
};

