export const getSpecificItemCount = (_id, cart) => {
  return cart
    .filter((item) => item._id === _id)
    .reduce((acc, amt) => acc + amt.quantity, 0);
};

export const getCartItemCount = (cart) => {
  return cart.reduce((acc, amt) => acc + amt.quantity, 0);
};

export const getCartTotal = (cart) => {
  return cart
    .reduce((acc, amt) => acc + amt.price * amt.quantity, 0)
    .toFixed(2);
};

//changer de place cette methode vers un dossier utils

export const addProductToCart = (product, cart) => {
  let newCart = [...cart];
  let index = newCart.findIndex((item) => item._id === product._id);
  if (index !== -1) {
    newCart[index].quantity += 1;
    cart = [...newCart];
  } else {
    cart = [...newCart, { ...product, quantity: 1 }];
  }
  return [...cart];
};

export const substractProductFromCart = (_id, cart) => {
  let newCart = [...cart];
  let index = newCart.findIndex((item) => item._id === _id);
  console.log(newCart[index].quantity);
  if (index !== -1) {
    newCart[index].quantity -= 1;
    cart = [...newCart];
  }
  if (newCart[index].quantity === 0) {
    newCart.splice(index, 1);
    cart = [...newCart];
  }
  return [...cart];
};

export const deleteProductFromCart = (_id, cart) => {
  let newCart = [...cart];
  let index = newCart.findIndex((item) => item._id === _id);
  if (index !== -1) {
    newCart.splice(index, 1);
    cart = [...newCart];
  }
  return [...cart];
};
