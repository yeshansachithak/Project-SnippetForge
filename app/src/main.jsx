import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import TutorialPage from "./components/TutorialPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/tutorial/:slug" element={<TutorialPage />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);
