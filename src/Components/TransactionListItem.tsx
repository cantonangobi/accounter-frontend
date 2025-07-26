function TransactionListItem() {
	return (
		<div className="transaction-list-item card p-4 m-2">
			<div className="row">
				<div className="col-4 text-start">Category</div>
				<div className="col-4 text-start">Account</div>
				<div className="col-4 text-start">Amount</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
