import React from "react";
import Aside from "../components/Aside";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { userData } from "../data";
import reducer from "../useReducer";

const HomeLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || token !== "true") {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div className="page">
      <Aside />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
