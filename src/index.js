import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { FavoritesContextStore } from "./context/FavoritesContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoritesContextStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextStore>,
  document.getElementById("root")
);
