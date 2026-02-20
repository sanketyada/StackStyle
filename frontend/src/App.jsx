import React from "react";
import AppRoute from "./routes/AppRoute";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      {" "}
      <div className=" px-4 sm:pc-[5vw] md:px-[7vw] lg:px-[9vw] ">
        <AppRoute />
      </div>
    </ShopContextProvider>
  );
}

export default App;
