import React, { useState } from "react";
import Button from "../../../components/atoms/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../../stores/actions";
import Label from "../../../components/atoms/Label";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorLoginInput, setErrorLoginInput] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;
    if (enteredEmail === "" || enteredPassword === "") {
      setErrorLoginInput(true);
      return;
    }
    dispatch(register(enteredEmail, enteredPassword, handlingError, navigate));
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  const handlingError = () => {
    setErrorLogin(true);
  };
  return (
    <section
      className={`flex justify-center  items-center bg-green-400 w-full sm:w-1/3 mx-auto py-20 relative rounded sm:mt-10 h-3/4 ${
        errorLogin || errorLoginInput ? "brightness-50" : ""
      }`}
    >
      <form onSubmit={handleSubmit}>
        {errorLogin && (
          <div className="text-center absolute bg-[#BE3144] text-white  w-2/4  top-1/5 left-1/4 p-6 rounded">
            <p className="text-sm mb-3">
              {" "}
              Only defined users succeed registration
            </p>
            <Button onClick={() => setErrorLogin(false)} className="">
              Ok
            </Button>
          </div>
        )}
        {errorLoginInput && (
          <div className="text-center absolute bg-[#BE3144] text-white  w-2/4  top-1/5 left-1/4 p-6 rounded">
            <p className="text-sm mb-3"> Missing email or username</p>
            <Button onClick={() => setErrorLoginInput(false)} className="">
              Ok
            </Button>
          </div>
        )}
        <div className="flex gap-20 mb-4">
          <Label>Email</Label>

          <input
            type="text"
            className="border-2 border-gray-600 ml-3 py-1 px-4 border-none rounded"
            ref={inputEmail}
          />
        </div>
        <div className="flex gap-16">
          <Label>Password</Label>
          <input
            type="password"
            className="border-2 border-gray-600 py-1 px-4 border-none rounded"
            ref={inputPassword}
          />
        </div>
        <div className="flex justify-center mt-7 ml-4">
          <Button>Register</Button>
        </div>
      </form>
    </section>
  );
};

export default Register;
