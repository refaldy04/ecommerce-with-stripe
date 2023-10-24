"use client";

import { login } from "@/redux/apiCalls";
import { loginStart } from "@/redux/userRedux";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state: any) => state.user);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="w-screen h-screen bg-register-bg bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="p-5 lg:w-1/4 w-3/4 bg-white">
        <h1 className="text-2xl">SIGN IN</h1>
        <form className="flex flex-col gap-5 my-5" onSubmit={handleLogin}>
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-2/5 px-5 py-3 bg-[#28949B] font-semibold text-white disabled:bg-[#6edee4] disabled:cursor-wait"
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && (
            <span className="text-red-500">Something went wrong...</span>
          )}
          <Link href="#" className="text-xs underline">
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link href="#" className="text-xs underline">
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
