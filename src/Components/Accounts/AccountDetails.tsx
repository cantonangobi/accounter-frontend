import TransactionList from "../Transactions/TransactionList";

function AccountDetails() {
	return (
		<main>
			<div>
				<h1>Account Details</h1>
			</div>
			<div>
				<TransactionList />
			</div>
		</main>
	);
}

export default AccountDetails;
