import React, { createContext, ReactNode, useContext } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

interface ITechContext {
    onSubmitTechnology(data: IRegisterData): void;
    onDeleteTechnology(id: string): void;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

interface ITechProviderProps {
  children: ReactNode;
}

export interface IRegisterData {
  title: string;
  status: string;
}

function TechProvider({ children }: ITechProviderProps) {
  async function onSubmitTechnology(data: IRegisterData) {
    console.log(data);

    const token = localStorage.getItem("userToken");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post(`/users/techs`, data);
      console.log(response);
      toast.success("Registrada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Requisição negada");
    }
  }


  async function onDeleteTechnology(id: string) {
    const token = localStorage.getItem("userToken");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.delete(`/users/techs/${id}`);
      console.log(response);
      toast.success("Deletada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Requisição negada");
    }
  }

  return (
    <TechContext.Provider value={{ onSubmitTechnology, onDeleteTechnology }}>
      {children}
    </TechContext.Provider>
  );
}

export function useTechContext(): ITechContext {
    const context = useContext(TechContext)

    return context
};

export default TechProvider
