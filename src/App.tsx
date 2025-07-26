import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Accounts from "./Components/Accounts";
import Header from "./Components/Header";
import Dashboard from "./Components/DashBoard";
import Transactions from "./Components/Transactions";

function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/accounts" element={<Accounts />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
