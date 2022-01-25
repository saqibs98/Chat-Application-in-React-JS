import { useReducer, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AuthReducer from "./AuthReducer";

type INITIAL_STATE_TYPE = {
  user: string;
  isFetching: boolean;
  error: any;
};

const INITIAL_STATE: any = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext: any = createContext<{
  state: INITIAL_STATE_TYPE;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const userID = uuidv4();

  useEffect(() => {
    sessionStorage.setItem("username", JSON.stringify(state.user));
    sessionStorage.setItem("userID", userID);
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
