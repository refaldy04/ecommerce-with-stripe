import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-register-bg bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="p-5 w-3/4 lg:w-2/5 bg-white">
        <h1 className="text-2xl">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap gap-5 my-5">
          <input
            type="text"
            placeholder="name"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
          />
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="last name"
          />
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="username"
          />
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="email"
          />
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="password"
          />
          <input
            type="text"
            className="flex-1 min-w-[40%] p-2 ring-transparent focus:ring-0 focus:border-black"
            placeholder="confirm password"
          />
          <span className="text-sm pb-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="w-2/5 px-5 py-3 bg-[#28949B] font-semibold text-white">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
