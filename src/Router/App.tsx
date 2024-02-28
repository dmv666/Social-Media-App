import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboardRouter from "./DashboardRouter";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Register from "../Components/Register";

const App = () => {
  
  const [user, setuser] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth?.uid) {
        setuser(true);
      } else setuser(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setuser]);

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAutentication={user}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouter isAutentication={user}>
              <Register />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter isAutentication={user}>
              <DashboardRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
