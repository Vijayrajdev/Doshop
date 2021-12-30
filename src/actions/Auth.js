import jwt from "jsonwebtoken";

export const loginUser = (email, password) => {
  // Verify mail and password
  // create and sign a JWT
  const Users = JSON.parse(localStorage.getItem("users"));
  const User = Users.find((u) => u.Email === email);
  if (User.Email === email && User.Password === password) {
    const token = jwt.sign({ email: User.Email }, "SECRET");
    return {
      type: "LOGIN_SUCCESS",
      payload: { token },
    };
  } else window.alert("Incorrect creds");
  return {
    type: "LOGIN_FAILED",
    payload: { token: null },
  };
};
