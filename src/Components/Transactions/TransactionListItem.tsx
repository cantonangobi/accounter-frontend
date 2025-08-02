import BtnDelete from "../All/BtnDelete";
import BtnEdit from "../All/BtnEdit";
import ConfirmDelete from "../All/ConfirmDelete";
import EditTransaction from "./EditTransaction";

interface TransactionProps {
	transaction: any;
}
function TransactionListItem({ transaction }: TransactionProps) {
	return (
		<div className="list-item card px-4 py-2 m-1">
			<div className="row text-start">
				<div className="col-4 py-2">
					<span>{transaction.category}</span>
				</div>
				<div className="col-3 py-2">
					<span>{transaction.account_name}</span>
				</div>
				<div className="col-3 py-2 text-end">
					<span>{transaction.amount}</span>
				</div>
				<div className="col-2 py-1 text-end ">
					<span>
						{/* <button
							className="btn btn-main py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#edit-transaction-modal"
						>
							<i className="fa-solid fa-pencil"></i>
						</button> */}
						<BtnEdit modal_target="#edit-transaction-modal">
							{null}
						</BtnEdit>
						<EditTransaction />
						<BtnDelete modal_target="#confirm-delete">
							{null}
						</BtnDelete>
						<ConfirmDelete />
					</span>
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
