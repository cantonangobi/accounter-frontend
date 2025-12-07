import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router";

import Accounts from "./Components/Accounts/Accounts";
import Dashboard from "./Components/Dashboard/Dashboard";
import Transactions from "./Components/Transactions/Transactions";
import Login from "./Components/Security/Login";
import SignUp from "./Components/Security/SignUp";
import AccountDetails from "./Components/Accounts/AccountDetails";
import ProtectedRoutes from "./Components/Security/ProtectedRoutes";

function App() {
	// let account1 = { id: 1, name: "Account 1", balance: "Balance" };
	// let account2 = { id: 2, name: "Account 2", balance: "Balance" };
	// let account3 = { id: 3, name: "Account 3", balance: "Balance" };
	// let account4 = { id: 4, name: "Account 4", balance: "Balance" };
	// account4.name = "Account 5";
	// let account_list = [account1, account2, account3, account4];

	let transaction1 = {
		id: 1,
		account_name: "Account 1",
		category: "Category 1",
		amount: "Amount 1",
		date: "Date 1",
	};
	let transaction2 = {
		id: 2,
		account_name: "Account 2",
		category: "Category 2",
		amount: "Amount 2",
		date: "Date 1",
	};
	let transaction3 = {
		id: 3,
		account_name: "Account 1",
		category: "Category 2",
		amount: "Amount 3",
		date: "Date 2",
	};
	let transaction4 = {
		id: 4,
		account_name: "Account 3",
		category: "Category 3",
		amount: "Amount 4",
		date: "Date 2",
	};
	let transaction5 = {
		id: 5,
		account_name: "Account 1",
		category: "Category 4",
		amount: "Amount 5",
		date: "Date 2",
	};

	let transaction_list = [
		transaction1,
		transaction2,
		transaction3,
		transaction4,
		transaction5,
	];

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/accounts" element={<Accounts />} />
					<Route
						path="/account-details/:id"
						element={
							<AccountDetails transactions={transaction_list} />
						}
					/>
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/" element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
