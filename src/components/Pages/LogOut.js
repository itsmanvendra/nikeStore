import React from "react";
import JordanLogo from "../../images/JordanLogo";
import { useAuth } from "../../ContextApi";

export default function LogOut() {

    const { currentUser, handleSignOut } = useAuth();
    const signOut = async () => {
      await handleSignOut();
    };
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center items-center">
            <JordanLogo />

            <p className="text-xl font-semibold text-center m-4 p-4">
              You are already logged in as
              <span className="text-blue-600 underline">
                {" "}
                {currentUser?.email}
              </span>
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-xl"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
}