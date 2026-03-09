import { createContext, useEffect, useState } from "react";
const AdminContext = createContext();
export default AdminContext;

const ContextProvider = ({children}) => {
    const [token, setToken] = useState(
      localStorage.getItem("token") ? localStorage.getItem("token") : "",
    );

    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);


  return(
   <AdminContext.Provider value={{token,setToken}}>
    {children}
   </AdminContext.Provider>
  );
};
 
export {ContextProvider};