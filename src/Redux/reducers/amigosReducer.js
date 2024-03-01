import { typesProducts } from "../types/types";

const initialState = {
  amigos: [],
};

const amigosReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.list:
      return {
        amigos: [...action.payload],
      };

    case typesProducts.add:
      return {
        amigos: [...state.amigos, action.payload],
      };
    case typesProducts.delete:
      return {
        amigos: state.amigos.filter((p) => p.id !== action.payload),
      };
    case typesProducts.search:
      return {
        amigos: action.payload,
      };

    default:
      return state;
  }
};

export default amigosReducer;
