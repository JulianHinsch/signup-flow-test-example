import { useCallback, useReducer, createContext } from "react";

export const defaultState = {
  firstName: null,
  lastName: null,
  age: null,
};

const SignupReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "age":
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};

export const SignupStateContext = createContext({
  state: defaultState,
});

export const SignupDispatchContext = createContext({
  dispatch: () => null,
});

export function SignupStoreProvider({ children, initialState = defaultState }) {
  const [state, rawDispatch] = useReducer(SignupReducer, initialState);
  const dispatch = useCallback(
    (action) => {
      rawDispatch(action);
    },
    [rawDispatch]
  );

  return (
    <SignupDispatchContext.Provider value={{ dispatch }}>
      <SignupStateContext.Provider value={{ state }}>
        {children}
      </SignupStateContext.Provider>
    </SignupDispatchContext.Provider>
  );
}
