import BtnDelete from "../All/BtnDelete";
import BtnEdit from "../All/BtnEdit";
import ConfirmDelete from "../All/ConfirmDelete";
import Axios from "../Api/Axios";
import { getSessionToken } from "../Security/SessionManagement";
import EditTransaction from "./EditTransaction";

// const DELETE_TXN_URL = "/api/v1/transaction/delete"

interface TransactionProps {
	transaction: any;
}
function TransactionListItem({ transaction }: TransactionProps) {
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
					const modal = document.getElementById("confirm-delete");
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
						<EditTransaction transaction={transaction} />
						<BtnDelete modal_target="#confirm-delete">
							{null}
						</BtnDelete>
						<ConfirmDelete handleDelete={handleDelete} />
					</span>
				</div>
			</div>
		</div>
	);
}

export default TransactionListItem;
