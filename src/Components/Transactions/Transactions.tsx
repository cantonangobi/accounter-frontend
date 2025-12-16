import { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionSideBar from "./TransactionSideBar";
import Axios from "../Api/Axios";

const GET_ACCOUNTS_URL = "/api/v1/account/getall";

function Transactions() {
	const [accounts, setAccounts] = useState([]);

	const sessionToken = window.sessionStorage.getItem("sessionToken");
	console.log(`session token: ${sessionToken}`);

	Axios.get(GET_ACCOUNTS_URL, {
		headers: { Authorization: sessionToken },
	})
		.then((response) => {
			if (response.status === 200) {
				console.log("account/getall response data: ", response.data);
				setAccounts(response.data);
			}
		})
		.catch((error) => {
			console.error(error);
		});

	return (
		<main className="container-fluid flex-fill ">
			<div className="row gx-2 h-100">
				<div className="col-md-3 p-2 h-100 h-md-auto ">
					<TransactionSideBar accounts={accounts} />
				</div>
				<div className="col-md-9 p-2 min-h-100 h-md-auto">
					<TransactionList />
				</div>
			</div>
		</main>
	);
}

export default Transactions;
