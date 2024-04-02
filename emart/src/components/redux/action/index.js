// For add item in cart
export const addCart = (product) => {
  return {
    type: "AddITEM",
    payload: product,
  };
};
// For delete item in cart
export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product,
    };
  };