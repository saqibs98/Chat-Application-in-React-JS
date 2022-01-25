export const LoginSart: any = (userCredentials: any) => ({
  type: "LOGIN_START",
});

export const LoginEnd: any = (userCredentials: any) => ({
  type: "LOGIN_END",
});

export const LoginSuccess: any = (user: any) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure: any = (error: any) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
