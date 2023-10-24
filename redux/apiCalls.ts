import { Dispatch } from "@reduxjs/toolkit";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "@/app/requestMethods";

type User = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch, user: User) => {
  dispatch(loginStart());

  try {
    const config = {
      method: "post",
      url: "auth/login",
      data: user,
    };
    const { data } = await publicRequest(config);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
