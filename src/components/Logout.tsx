import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppState } from "../store";
import { logout } from "../store/actions/userActions";

function Logout() {
  const { data } = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logout() as any);
    console.log("cıkıs");
    navigate("/login");
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;
