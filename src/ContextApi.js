import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from './config/firebase';
import { signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useSnackbar } from 'notistack';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    const signUpWithUsernameAndPass = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            enqueueSnackbar("SignUp Successful", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
            });
        }
        catch (error) {
            console.log(error.message)
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
            });
        }
    }


    const loginWithUsernameAndPass = async (email, password) => {
        try {
            const userLoginDetails = await signInWithEmailAndPassword(auth, email, password);
            const user = userLoginDetails.user
            enqueueSnackbar("Login Successful", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
            });
        }
        catch (error) {
            console.log(error.message)
            if (error.message === "Firebase: Error (auth/user-not-found).") {
                enqueueSnackbar("User Not Found", {
                    variant: "error",
                    anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
                });
            }
            else if (error.message === "Firebase: Error (auth/wrong-password).") {
                enqueueSnackbar("Incorrect Password", {
                    variant: "error",
                    anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
                });
            }
            else {
                enqueueSnackbar(error.message, {
                    variant: "error",
                    anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
                });
            }
            
        }
    }


    const loginWithGoogle = async () => {
        try {
            const userLoginDetails = await signInWithPopup(auth, provider);
            const user = userLoginDetails.user
            enqueueSnackbar("Login Successful", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
            });
            
        }
        catch (error) {
            console.log(error.message)
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 2500,
            });
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            enqueueSnackbar("Sign Out Successful", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 1500,
            });
            console.log(currentUser)
        }
        catch (error) {
            console.log(error.message)
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                autoHideDuration: 2500,
            });
        }
    }


    return (
      <AuthContext.Provider
        value={{
          currentUser,
          loginWithUsernameAndPass,
          loginWithGoogle,
          handleSignOut,
          signUpWithUsernameAndPass,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}
