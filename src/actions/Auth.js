import jwt from "jsonwebtoken";

export const loginUser = (email, password) => {
  // VERIFY EMAIL AND PASSWORD
  // create and sign a JWT
  if (email === "admin@mail.com" && password === "jay") {
    const token = jwt.sign({ email }, "SECRET");
    return {
      type: "LOGIN_SUCCESS",
      payload: { token },
    };
  } else
    return {
      type: "LOGIN_FAILED",
      payload: { token: null },
    };
};
