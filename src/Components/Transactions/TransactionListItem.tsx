import BtnDelete from "../All/BtnDelete";
import BtnEdit from "../All/BtnEdit";
import EditTransaction from "./EditTransaction";

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
				<div className="col-3 py-2 text-end">
					<span>Amount</span>
				</div>
				<div className="col-2 py-1 text-end ">
					<span>
						<button
							className="btn btn-main py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#edit-transaction-modal"
						>
							<i className="fa-solid fa-pencil"></i>
						</button>
						<EditTransaction />
						<BtnDelete />
					</span>
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
