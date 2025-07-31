import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	useParams,
} from "react-router";

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
	let account1 = { id: 1, name: "Account 1", balance: "Balance" };
	let account2 = { id: 2, name: "Account 2", balance: "Balance" };
	let account3 = { id: 3, name: "Account 3", balance: "Balance" };
	let account4 = { id: 4, name: "Account 4", balance: "Balance" };
	account4.name = "Account 5";
	let account_list = [account1, account2, account3, account4];

	return (
		<>
			{/* <SignUp /> */}
			{/* <Login /> */}
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route
						path="/accounts"
						element={<Accounts account_list={account_list} />}
					/>
					<Route
						path="/account-details/:id"
						element={<AccountDetails />}
					/>
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
