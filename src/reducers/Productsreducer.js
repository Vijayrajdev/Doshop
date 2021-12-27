const initialState = {
  products: [],
};

const Productsreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default Productsreducer;
