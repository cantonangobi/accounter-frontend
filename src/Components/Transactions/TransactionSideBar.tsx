import CreateTransaction from "./CreateTransaction";

function TransactionSideBar() {
	return (
		<div
			id="sidebar"
			className="card p-2 h-100 h-md-auto container-fluid text-center sidebar"
		>
			<h1 className="m-2">Transactions</h1>
			<button
				className="btn btn-main m-2 p-2"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#create-transaction-modal"
			>
				Add Transaction
			</button>
			<CreateTransaction />
		</div>
	);
}

export default TransactionSideBar;
