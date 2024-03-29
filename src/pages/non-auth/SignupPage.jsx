import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!isLogin) {
      try {
        const { data } = await authApi.post("/register", {
          id,
          password,
          nickname,
        });
        if (data.success) {
          alert("회원가입에 성공하였습니다. 로그인 페이지로 이동할게요");
          navigate("/login");
        }
      } catch (error) {
        alert(error);
        console.log("error", error);
      }
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="id">id</label>
          <input />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
