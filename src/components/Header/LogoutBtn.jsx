import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-md font-semibold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
