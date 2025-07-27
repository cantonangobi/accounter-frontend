import BtnDelete from "./BtnDelete";

function TransactionListItem() {
	return (
		<div className="list-item card px-4 py-2 m-1">
			<div className="row text-start">
				<div className="col-4 py-2">
					<span>Category</span>
				</div>
				<div className="col-3 py-2">
					<span>Account</span>
				</div>
				<div className="col-3 py-2">
					<span>Amount</span>
				</div>
				<div className="col-2 py-1 text-end ">
					<span>
						<BtnDelete />
						<BtnDelete />
					</span>
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
