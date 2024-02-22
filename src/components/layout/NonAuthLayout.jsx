import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      alert("이미 로그인 상태입니다.");
      Navigation("/");
    } else {
      setIsRendered(true);
    }
  }, []);
  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;
