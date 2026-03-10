import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/AdminContext";
export const backendURL = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
