import BtnDelete from "../All/BtnDelete";
import BtnEdit from "../All/BtnEdit";
import ConfirmDelete from "../All/ConfirmDelete";
import Axios from "../Api/Axios";
import { getSessionToken } from "../Security/SessionManagement";
import EditTransaction from "./EditTransaction";

// const DELETE_TXN_URL = "/api/v1/transaction/delete"

interface Props {
	transaction: any;
	accounts: any[];
}

function TransactionListItem({ transaction, accounts }: Props) {
	const EDIT_MODAL_ID = `edit-transaction-modal-${transaction.id}`;
	const DELETE_MODAL_ID = `confirm-delete-${transaction.id}`;

	function handleDelete() {
		const DELETE_TXN_URL = `/api/v1/transaction/delete/${transaction.id}`;

		const sessionToken = getSessionToken();
		console.log("session token:", sessionToken);

		Axios.delete(DELETE_TXN_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log("Success!");
					const modal = document.getElementById(DELETE_MODAL_ID);
					modal?.setAttribute("class", "modal fade");
					const modalBackdrop =
						document.getElementsByClassName("modal-backdrop");
					modalBackdrop.item(0)?.remove();
					// navigate("/accounts");
					window.location.reload();
				}
			})
			.catch((error) => {
				console.error("Something went wrong: ", error);
			});
	}
	return (
		<div className="list-item card px-4 py-2 m-1">
			<div className="row text-start">
				<div className="col-4 py-2">
					<span>{transaction.category}</span>
				</div>
				<div className="col-3 py-2">
					<span>{transaction.accountName}</span>
				</div>
				<div className="col-3 py-2 text-end">
					<span>{transaction.amount} KES</span>
				</div>
				<div className="col-2 py-1 text-end ">
					<span>
						<BtnEdit modalId={EDIT_MODAL_ID}>{null}</BtnEdit>
						<EditTransaction
							transaction={transaction}
							accounts={accounts}
						/>
						<BtnDelete modalId={DELETE_MODAL_ID}>{null}</BtnDelete>
						<ConfirmDelete
							modalId={DELETE_MODAL_ID}
							handleDelete={handleDelete}
						/>
					</span>
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
