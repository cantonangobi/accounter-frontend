import { useEffect, useState } from "react";
import TransactionListItem from "./TransactionListItem";
import Axios from "../Api/Axios";

// interface TransactionListProps {
// 	transaction_list: any;
// }
interface Props {
	accounts: any[];
}

const GET_TXNS_URL = "/api/v1/transaction/getall";

function TransactionList({ accounts }: Props) {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const sessionToken = window.sessionStorage.getItem("sessionToken");
		console.log(`session token: ${sessionToken}`);

		Axios.get(GET_TXNS_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(
						"transaction/getall response data: ",
						response.data
					);
					setTransactions(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="card p-2 container-fluid min-h-100 h-md-auto ">
			{transactions.map((transaction: any) => (
				<TransactionListItem
					transaction={transaction}
					key={transaction.id}
					accounts={accounts}
				/>
			))}
		</div>
	);
}

export default TransactionList;
