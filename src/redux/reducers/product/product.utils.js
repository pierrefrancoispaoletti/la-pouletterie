export const addNewProductHandler = (state, payload) => {
  let newState = [...state, payload];
  return [...newState];
};

export const deleteProductHandler = (state, payload) => {
  let newState = state.filter((product) => product._id !== payload);
  return [...newState];
};

export const updateProductHandler = (state, payload) => {
  let index = state.findIndex((product) => product._id === payload._id);
  let update = [...state];
  update[index] = payload;
  return [...update];
};
