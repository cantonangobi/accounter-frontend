import { useEffect, useState } from "react";
import AccountListItem from "./AccountListItem";
import axios from "axios";

const URL = "http://localhost:8080/api/v1/account/getall";

interface AccountListProps {
	accounts: any;
}

function AccountList({ accounts }: AccountListProps) {
	const [accountList, setAccounts] = useState([]);

	useEffect(() => {
		const sessionToken = window.sessionStorage.getItem("sessionToken");
		console.log(`session token: ${sessionToken}`);
		axios
			.get(URL, { headers: { Authorization: sessionToken } })
			.then((response) => {
				if (response.status === 200) {
					setAccounts(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="list-group card p-2 container-fluid min-h-100 h-md-auto ">
			{accountList.map((account: any) => (
				<AccountListItem account={account} key={account.id} />
			))}
		</div>
	);
}

export default AccountList;
