import React, { createContext } from 'react'
import api from '../services/api';
import toast from "react-hot-toast";

export const TechContext = createContext({})


function TechProvider({children}) {

    async function onSubmitTechnology(data) {
        console.log(data)

        const token = localStorage.getItem('userToken');

        try {
            api.defaults.headers.authorization = `Bearer ${token}`;
            const response = await api.post(`/users/techs`, data)
            console.log(response)
            toast.success("Registrada com sucesso!");
            
        } catch (error) {
            console.log(error);
            toast.error("Requisição negada");
        }
      }

      async function onDeleteTechnology(id) {

        const token = localStorage.getItem('userToken');

        try {
            api.defaults.headers.authorization = `Bearer ${token}`;
            const response = await api.delete(`/users/techs/${id}`)
            console.log(response)
            toast.success("Deletada com sucesso!");
            

        } catch (error) {
            console.log(error);
            toast.error("Requisição negada");
        }
      }

  return (
<TechContext.Provider value={{onSubmitTechnology, onDeleteTechnology}}>
    {children}
</TechContext.Provider>
  )
}

export default TechProvider