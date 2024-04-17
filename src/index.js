import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { InfoProvider } from "./context/infoContext";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="294556756441-8h180jreptq7i0kva1huefvqkvt2utf4.apps.googleusercontent.com">

    <InfoProvider>
      <App />
    </InfoProvider>
  </GoogleOAuthProvider>
  </BrowserRouter>
);
