import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster />
  </>
);