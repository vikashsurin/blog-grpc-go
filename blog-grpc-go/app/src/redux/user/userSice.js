import { createSlice } from "@reduxjs/toolkit";
import { CreateUser } from "../../methods/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
  },
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
      console.log(state);
    },
    readUser: (state, action) => {},
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
});

export const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

// actions
export const createUserAsync = (state, name, email, password) => async (
  dispatch
) => {
  const res = await CreateUser(name, email, password);
  const data = {
    id: res.getId(),
    name: res.getName(),
    email: res.getEmail(),
  };
  // dispatch event
  dispatch(createUser(data));
  console.log("user slice res ", data);
};

// export values
export const selectUser = (state) => state.user;

// export reducer
const userReducer = userSlice.reducer;
export { userReducer };
