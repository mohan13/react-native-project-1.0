import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, LoginUserData, UserData } from "./types";
import { Status } from "../type.global";
import api from "@/http";

const initialState: InitialState = {
  userData: {} as UserData,
  token: null,
  status: Status.Loading,
};

const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    setUser(state: InitialState, action: PayloadAction<UserData>) {
      state.userData = action.payload;
    },

    setStatus(state: InitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = authSlice.actions;

export default authSlice.reducer;

function registerUser(data: UserData) {
  return async function registerUserThunk(dispatch: any) {
    try {
      const response = await api.post("/register", data);
      if (response.status === 200) {
        dispatch(setUser(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(Status.Error));
    }
  };
}

function loginUser(data: LoginUserData) {
  return async function registerUserThunk(dispatch: any) {
    try {
      const response = await api.post("/register", data);
      if (response.status === 200) {
        dispatch(setUser(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      console.log("error :", error);
      dispatch(setStatus(Status.Error));
    }
  };
}

export { loginUser, registerUser };
