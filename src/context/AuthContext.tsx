import { createContext, useEffect, useState } from "react";
//Types
import { WithChildren } from "../interfaces/Icontainer";
import { AuthContextType, IUser } from "../interfaces/IProducts";
//Data
import { auth } from "../firebase/config";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<IUser>({
    logged: false,
    email: null
  });

  const login = (values: { email: string, password: string }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .catch((e)=> {
        console.log(e)
      })
  };

  const register = (values: { email: string, password: string }) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .catch((e)=> {
        console.log(e)
      })
  }

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser({logged: true, email: user.email})
      } else {
        setUser({logged: false, email: null})
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};