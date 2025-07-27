import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Accounts from "./Components/Accounts";
import Header from "./Components/Header";
import Dashboard from "./Components/DashBoard";
import Transactions from "./Components/Transactions";
import Login from "./Components/Login";
import SignUp from "./Components/Sign Up";
// import SignUp from "./Components/SignUp";

function App() {
	// let [logged_in, change_login] = useState(false);

	return (
		<>
			<SignUp />
			{/* <Header />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/accounts" element={<Accounts />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</Router> */}
		</>
	);
}

export default App;
