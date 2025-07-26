import BtnDelete from "./BtnDelete";

function TransactionListItem() {
	return (
		<div className="transaction-list-item card px-4 py-3 m-2">
			<div className="row text-start">
				<span className="col-4">Category</span>
				<span className="col-3">Account</span>
				<span className="col-3">Amount</span>
				<span className="col-2 text-end ">
					<BtnDelete />
				</span>
			</div>
		</div>
	);
}

export default TransactionListItem;
