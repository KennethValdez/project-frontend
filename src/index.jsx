import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container-fluid">
    <div className="col-12">
      <Navbar />

      <div class="container">
        <div class="col-12">
          <section class="seccion-general">
            {/* aqui va el carrousel */}
          </section>
          <section class="seccion-general">
            {/* aqui van los tabs */}
          </section>
          <section>{/* aqui va el footer */}</section>
        </div>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
