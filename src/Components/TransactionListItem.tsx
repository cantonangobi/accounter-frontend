import BtnDelete from "./BtnDelete";

function TransactionListItem() {
	return (
		<div className="transaction-list-item card px-4 py-3 m-2">
			<div className="row text-start">
				<div className="col-4 py-2">
					<span>Category</span>
				</div>
				<div className="col-4 py-2">
					<span>Account</span>
				</div>
				<div className="col-3 py-2">
					<span>Amount</span>
				</div>
				{/* <span className="col-4">Account</span>
				<span className="col-3">Amount</span> */}
				<div className="col-1 text-end ">
					<BtnDelete />
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
