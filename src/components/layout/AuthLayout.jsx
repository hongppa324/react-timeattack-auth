import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert("로그인 정보가 확인되지 않습니다.");
      Navigation("/login");
    } else {
      setIsRendered(true);
    }
  }, []);

  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
