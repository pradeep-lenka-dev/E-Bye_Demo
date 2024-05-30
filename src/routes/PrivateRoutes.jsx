import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute(props) {
console.log("🚀 ~ PrivateRoute ~ props:", props.element)

  const isAuth = false
  return isAuth ? (
    <>
      <h1>You are on your way to purchase glory!</h1>
      {/* < {props.element} /> */}
    </>
  ) : (
    <Navigate to= {props.redirectTo} />
  );
}

export default PrivateRoute;


