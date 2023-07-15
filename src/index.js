import React from "react";
import ReactDOM from "react-dom";
import "./input.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import { DataContext, DataProvider } from "./Context/DataContext";

// Call make Server
makeServer();
export { AuthContext, DataContext };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
