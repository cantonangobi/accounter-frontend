import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Accounts from "./Components/Accounts/Accounts";
import Header from "./Components/All/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Transactions from "./Components/Transactions/Transactions";
import Login from "./Components/Security/Login";
import SignUp from "./Components/Security/Sign Up";
import AccountDetails from "./Components/Accounts/AccountDetails";
// import SignUp from "./Components/SignUp";

function App() {
	// let [logged_in, change_login] = useState(false);

	return (
		<>
			{/* <SignUp /> */}
			{/* <Login /> */}
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/accounts" element={<Accounts />} />
					<Route
						path="/account-details"
						element={<AccountDetails />}
					/>
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
