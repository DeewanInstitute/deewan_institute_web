import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShopProvider } from "./context/shopcontext";
import SafetyModal from "./components/safetymodal/safetymodal";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShopProvider>
      <App />
      <SafetyModal />
    </ShopProvider>
  </StrictMode>,
);
// const root = ReactDOM.createRoot(document.getElementById('root')!);

// root.render(
//   <React.StrictMode>
//     <ShopProvider>
//       <App />
//     </ShopProvider>
//   </React.StrictMode>,
// )
