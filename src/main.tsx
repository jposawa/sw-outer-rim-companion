import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</StrictMode>
);
