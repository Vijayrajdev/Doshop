import jwt from "jsonwebtoken";

export const loginUser = (email, password) => {
  // VERIFY EMAIL AND PASSWORD
  // create and sign a JWT
  if (email === "admin@mail.com" && password === "jay") {
    const token = jwt.sign({ email }, "SECRET");
    return { token };
  } else return { token: null };
};
