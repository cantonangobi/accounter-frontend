import { useEffect, useState } from "react";
import AccountListItem from "./AccountListItem";
// import axios from "axios";
import Axios from "../Api/Axios";

const GET_ACCOUNTS_URL = "/api/v1/account/getall";

// interface AccountListProps {
// 	accounts: any;
// }

function AccountList() {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		const sessionToken = window.sessionStorage.getItem("sessionToken");
		console.log(`session token: ${sessionToken}`);
		Axios.get(GET_ACCOUNTS_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(
						"accounts/getall response data: ",
						response.data
					);
					setAccounts(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="list-group card p-2 container-fluid min-h-100 h-md-auto ">
			{accounts.map((account: any) => (
				<AccountListItem account={account} key={account.id} />
			))}
		</div>
	);
}

export default AccountList;
