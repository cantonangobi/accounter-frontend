import TransactionListItem from "./TransactionListItem";

function TransactionList() {
	return (
		<div className="card p-2 container-fluid min-h-100 h-md-auto ">
			<TransactionListItem />
			<TransactionListItem />
			<TransactionListItem />
			<TransactionListItem />
		</div>
	);
}

export default TransactionList;
