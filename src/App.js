import React, { useState, useEffect } from "react";
import LandingPage from "./components/Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import { SnackbarProvider } from "notistack";
import SignUp from "./components/Pages/SignInPage";
import { AuthProvider } from "./ContextApi";
import ForgetPassWord from "./components/Pages/ForgetPassWord";

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpassword" element={<ForgetPassWord />} />
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
