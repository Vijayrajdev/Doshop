const initialState = {
  isLoading: "false",
};

const Loaderreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default Loaderreducer;
