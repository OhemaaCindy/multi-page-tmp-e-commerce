import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Providers from "./components/providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <App />
      </Suspense>
    </Providers>
  </StrictMode>
);
