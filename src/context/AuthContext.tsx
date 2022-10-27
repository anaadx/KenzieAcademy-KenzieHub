import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  onSubmitRegister(data: IRegisterData): void; 
  onSubmitLogin(data: ILoginData): void;
  user: IUserData | null;
  loading: any;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)


export interface IUserData{
  id: string,
  name: string,
  email: string,
  course_module: string,
  bio: string,
  contact: string ,
  techs: [],
  works: [],
  created_at: number,
  updated_at: number,
  avatar_url: null
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

function AuthProvider({children}: IAuthProviderProps) {
    const [user, setUser] = useState<IUserData | null>(null) 
    const [loading, setLoading] = useState<boolean>(true)

    const navegate = useNavigate();

    useEffect(() => {
        async function loadUser() {
          const token = localStorage.getItem('userToken');
            console.log(token)
          if (token) {
            try {
              api.defaults.headers.authorization = `Bearer ${token}`;
    
              const { data } = await api.get<IUserData>('/profile');
    
              setUser(data);
            } catch (error) {
                console.log(error)
                window.localStorage.removeItem("userToken")
                window.localStorage.removeItem("userId")
                window.localStorage.removeItem("userData")
            }
          }
    
          setLoading(false);
        }
    
        loadUser();
      }, [user]);
    


   async function onSubmitRegister(dataRegister: IRegisterData) {

        try {
            const {data} = await api.post<IUserData>(`/users`, dataRegister)
            console.log(data)
            toast.success("Registrado com sucesso!");
            navegate("/login");
            
        } catch (error) {
            console.log(error);
            toast.error("Requisição negada");
        }
      }

      interface ILoginResponse{
        user: IUserData;
        token: string
      }

      async function onSubmitLogin(dataLogin: ILoginData) {
        

        try {
            const {data} = await api.post<ILoginResponse>(`/sessions`, dataLogin)
            
            toast.success("Login realizado com sucesso")
            window.localStorage.setItem("userData", JSON.stringify(data.user));
            window.localStorage.setItem("userId", data.user.id);
            window.localStorage.setItem("userToken", data.token);
            console.log(data)
            navegate("/dashboard", {replace: true});

            api.defaults.headers.authorization = `Bearer ${data.token}`

            setUser(data.user)
            
        } catch (error) {
            console.log(error)
            toast.error("Dados incorretos. Não foi possível fazer login.");
        }
      }
    
  return (
    <AuthContext.Provider value={{onSubmitRegister, onSubmitLogin, user, loading}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): IAuthContext {
  const context = useContext(AuthContext)

  return context
};

export default AuthProvider