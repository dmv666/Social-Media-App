import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
  } from "firebase/auth";
  import { typesLogin } from "../types/types";
  
  export const actionRegisterAsync = (email: string, pass: string, firstName: string, lastName: string) => {
    return (dispatch:any) => {
      const auth:any = getAuth();
      console.log(auth)
      createUserWithEmailAndPassword(auth, email, pass)
        .then(async ({ user }) => {
          await updateProfile(auth.currentUser, { displayName: firstName});
          dispatch(actionRegisterSync(firstName, email, pass, lastName));
        })
        .catch((error) => {
          console.warn("error", error);
          
        });
    };
  };
  
  export const actionRegisterSync = (firstName: string, email: string, pass: string, lastName: string) => {
    console.log("Usuario Agregado ");
    return {
      type: typesLogin.register,
      payload: { firstName, email, pass, lastName },
    };
  };