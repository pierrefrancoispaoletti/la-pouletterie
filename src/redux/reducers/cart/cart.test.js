const addToCart = (product = {}, cart = []) => {
  let index = cart.findIndex((item) => item._id === product._id);
  if (index === -1) {
    return [...cart, { ...product, quantity: 1 }];
  }
  cart[index].quantity += 1;
  return [...cart];
};

const substractFromCart = (_id = "", cart = []) => {
  let index = cart.findIndex((item) => item._id === _id);
  if (cart[index].quantity <= 1) {
    cart.splice(index, 1);
    return [...cart];
  }
  cart[index].quantity -= 1;
  return [...cart];
};

describe("Cart", () => {
  it("cart length to be 1", () => {
    let cart = addToCart({ _id: 1, name: "test" }, []);
    expect(cart.length).toBe(1);
  });

  it("cart first product to be test and quantity to be 1", () => {
    let cart = [];
    cart = addToCart({ _id: 1, name: "test" }, cart);
    expect(cart[0].name).toBe("test");
    expect(cart[0].quantity).toBe(1);
  });

  it("cart first product to be test and quantity to be 2", () => {
    let cart = [];
    cart = addToCart({ _id: 1, name: "test" }, cart);
    cart = addToCart({ _id: 1, name: "test" }, cart);
    cart = addToCart({ _id: 1, name: "test" }, cart);
    expect(cart[0].name).toBe("test");
    expect(cart[0].quantity).toBe(3);
  });

  it("adding to cart and substracting to cart result in length of 0", () => {
    let cart = [];
    cart = addToCart({ _id: 1, name: "test" }, cart);
    cart = substractFromCart(1, cart);
    expect(cart.length).toBe(0);
  });

  it("adding 2 products cart and substracting one to cart result in length of 1", () => {
    let cart = [];
    cart = addToCart({ _id: 1, name: "test" }, cart);
    cart = addToCart({ _id: 1, name: "test" }, cart);
    cart = substractFromCart(1, cart);
    cart = substractFromCart(1, cart);
    console.log(cart);
  });
});
