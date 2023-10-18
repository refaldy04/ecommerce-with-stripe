import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-register-bg bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="p-5 lg:w-1/4 w-3/4 bg-white">
        <h1 className="text-2xl">SIGN IN</h1>
        <form className="flex flex-col gap-5 my-5">
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="username"
          />

          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="password"
          />

          <button className="w-2/5 px-5 py-3 bg-[#28949B] font-semibold text-white">
            LOGIN
          </button>
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
