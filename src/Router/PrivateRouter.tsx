import { Navigate } from "react-router-dom";

const PrivateRouter = ({ isAutentication, children }:any) => {
  return isAutentication ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
