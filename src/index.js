import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./starRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "Amazing"]}
    />
    <StarRating maxRating={5} size={40} color="red" defaultRating={3} /> */}
  </React.StrictMode>
);
