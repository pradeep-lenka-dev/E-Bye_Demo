import { Navigate, Outlet, Route, Router } from "react-router-dom";
function PrivateRoute({ element, redirectTo }) {
// console.log("🚀 ~ PrivateRoute ~ props:", props)

  const isAuth = true
  return isAuth ? (
    <>
      <h1>You are on your way to purchase glory!</h1>
      {element}
    </>
  ) : (
    <Navigate to= {redirectTo} />
  );
}

export default PrivateRoute;


