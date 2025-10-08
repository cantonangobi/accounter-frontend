import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./Components/Security/AuthProvider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Components/Security/Login.tsx";
import SignUp from "./Components/Security/SignUp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</StrictMode>
);
