import React from "react";
import Aside from "../components/Aside";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
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
