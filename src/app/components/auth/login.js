"use client";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {toast}  from "react-toastify"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = useAuth();

  console.log(isLoggingIn)

  async function submitHandler() {
    if (!email || !password) {
      // setError("Please enter email and password");
      toast.error('Please enter email and password');
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
        toast.success('login Successfully');
      } catch (err) {
        toast.error('Incorrect email or password');
      }
      return;
    }
    else{
      try{
        await signup(email, password);
      } catch(err){
        toast.error('Incorrect email or password');
      }
    }
  }

  return (
    <div className="sm:max-w-sm py-40 flex-1 text-xs sm:text-sm flex flex-col items-center gap-5 sm:gap-6  h-screen">
 
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "Login" : "register"}
      </h1>
      {/* {error && (
        <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
          {error}
        </div>
      )} */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        autoComplete="off"
        required
        className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        autoComplete="off"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[20ch] border border-red-500 border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-red-500 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white"
      >
        <h2 className="relative z-20">{!isLoggingIn ? "Register" : "Login"}</h2>
      </button>
      <h2
        className="duration-300 hover:underline cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Already Registered? Login" : "New Here? Register"}
      </h2>
    </div>
  );
}
