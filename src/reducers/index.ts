import reducer from "./reducers";
export * from "./actions";
export * from "./interfaces";
export type iReducer = ReturnType<typeof reducer>;

export default reducer;
