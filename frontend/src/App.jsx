import React from "react";
import AppRoute from "./routes/AppRoute";
import ShopContextProvider from "./context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <ShopContextProvider>
      {" "}
      <div className="bg-gray-200 px-4 sm:pc-[5vw] md:px-[7vw] lg:px-[9vw] ">
        <AppRoute />
          <ToastContainer />
      </div>
    </ShopContextProvider>
  );
}

export default App;
