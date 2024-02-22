import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const { data } = await authApi.post("/login", {
          id,
          password,
        });
        const { accessToken, userId, nickname } = data;
        if (data.success) {
          alert("로그인에 로그인에 성공하였습니다. 메인 페이지로 이동할게요.");
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userId", userId);
          localStorage.setItem("nickname", nickname);
          setIsLogin(true);
          navigate("/");
        }
      } catch (error) {
        alert(error);
        console.log("error", error);
      }
    } else {
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="id">id</label>
          <input />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input />
        </div>

        <button type="submit" onClick={() => setIsLogin(true)}>
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
