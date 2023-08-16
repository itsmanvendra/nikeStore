import React, { useContext } from "react";
import JordanLogo from "../../images/JordanLogo";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";

import { useForm } from "react-hook-form";

import { useSnackbar } from "notistack";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (data) => {
        await sendPasswordResetEmail(auth, data.email, {
            url: "http://localhost:3000/login",
            handleCodeInApp: true,
        })
        enqueueSnackbar("Password Reset Link Sent", {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
            autoHideDuration: 1500,
        });

        navigate("/login");
    }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto h-10 w-auto flex justify-center items-center">
            <JordanLogo />
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Your Password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  defaultValue=""
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-600 p-2 text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset Password
              </button>
            </div>
          </form>
          
          <div className="border-t border-gray-950 my-4"></div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
