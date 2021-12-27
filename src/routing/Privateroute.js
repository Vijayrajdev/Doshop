import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Privateroute = ({ child }) => {
  const { token } = useSelector((state) => state.auth);
  return token !== "vijay" ? <Navigate to="/" /> : child;
};

export default Privateroute;
