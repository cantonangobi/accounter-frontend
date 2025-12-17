import Axios from "../Api/Axios";
import { useState, type FormEvent } from "react";
import { getSessionToken } from "../Security/SessionManagement";

interface Props {
	transaction: any;
	accounts: any[];
}

function EditTransaction({ transaction, accounts }: Props) {
	const UPDATE_TXN_URL = `/api/v1/transaction/update/${transaction.id}`;
	const MODAL_ID = `edit-transaction-modal-${transaction.id}`;
	const isExpense = transaction.type === "EXPENSE";
	console.log("transaction amount: ", transaction.amount);
	const getTxDate = () => {
		const txDate = new Date(transaction.date);
		const year = txDate.getFullYear();
		const month = String(txDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(txDate.getDate()).padStart(2, "0");
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	};

	const formattedDate = getTxDate();
	const [accountName, setAccountName] = useState(transaction.accountName);
	const [type, setType] = useState(transaction.type);
	const [category, setCategory] = useState(transaction.category);
	const [amount, setAmount] = useState(transaction.amount);
	const [date, setDate] = useState(formattedDate);
	console.log("transaction type expense: ", transaction.type === "EXPENSE");
	console.log("transaction type income: ", transaction.type === "INCOME");

	// const navigate = useNavigate();

	// console.log("account: ", accountName);
	// console.log("category: ", category);
	// console.log("amount: ", amount);
	// console.log("date: ", date);

	const handleUpdateTransaction = (e: FormEvent) => {
		e.preventDefault();

		const sessionToken = getSessionToken();

		Axios.post(
			UPDATE_TXN_URL,
			{
				accountName: accountName,
				type: type,
				category: category,
				amount: amount,
				date: date,
			},
			{ headers: { Authorization: sessionToken } }
		)
			.then((response) => {
				if (response.status === 200) {
					console.log("Success!");
					const modal = document.getElementById(MODAL_ID);
					modal?.setAttribute("class", "modal fade");
					const modalBackdrop =
						document.getElementsByClassName("modal-backdrop");
					modalBackdrop.item(0)?.remove();
					// navigate(`/account-details/${response.data.id}`);
					window.location.reload();
				}
			})
			.catch((error) => {
				console.error("Something went wrong: ", error);
			});
	};
	return (
		<div className="modal fade" id={MODAL_ID} tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							// id="edit-transaction-modal-label"
						>
							Edit Transaction
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
						></button>
					</div>
					<div className="modal-body">
						<form
							className="text-start"
							onSubmit={handleUpdateTransaction}
						>
							<div className="mb-3">
								<div className="input-group d-flex mb-3 w-100">
									<input
										type="radio"
										className="btn-check invisible"
										name="type"
										id={`edit-expense-${transaction.id}`}
										autoComplete="off"
										value="EXPENSE"
										defaultChecked={isExpense}
										onChange={(e) => {
											setType(e.target.value);
										}}
									/>
									<label
										className="btn btn-outline-primary flex-fill rounded-start"
										htmlFor={`edit-expense-${transaction.id}`}
									>
										Expense
									</label>

									<input
										type="radio"
										className="btn-check"
										name="type"
										id={`edit-income-${transaction.id}`}
										autoComplete="off"
										value="INCOME"
										defaultChecked={!isExpense}
										onChange={(e) => {
											setType(e.target.value);
										}}
									/>
									<label
										className="btn btn-outline-primary flex-fill"
										htmlFor={`edit-income-${transaction.id}`}
									>
										Income
									</label>
								</div>

								<div className="mb-3">
									<label
										htmlFor={`edit-amount-${transaction.id}`}
										className="form-label"
									>
										Amount
									</label>
									<input
										type="number"
										className="form-control"
										id={`edit-amount-${transaction.id}`}
										defaultValue={transaction.amount}
										onChange={(e) => {
											setAmount(e.target.value);
										}}
										required
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor={`edit-select-account-${transaction.id}`}
										className="form-label"
									>
										Account
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id={`edit-select-account-${transaction.id}`}
										defaultValue={transaction.accountName}
										onChange={(e) => {
											setAccountName(e.target.value);
										}}
										required
									>
										{/* <option
											value=""
											disabled
											defaultChecked
										>
											- Select Account -
										</option> */}
										{accounts.map((account: any) => (
											<option value={account.name}>
												{account.name}
											</option>
										))}

										{/* <option value="Cash">Cash</option>
										<option value="Mpesa">Mpesa</option>
										<option value="Current Account">
											Current Account
										</option>
										<option value="Savings Account">
											Savings Account
										</option> */}
									</select>
								</div>
								<div className="mb-3">
									<label
										htmlFor={`edit-select-category-${transaction.id}`}
										className="form-label"
									>
										Category
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id={`edit-select-category-${transaction.id}`}
										defaultValue={transaction.category}
										onChange={(e) => {
											setCategory(e.target.value);
										}}
										required
									>
										{/* <option
											value=""
											disabled
											defaultChecked
										>
											- Select Category -
										</option> */}

										<option value="Food">Food</option>
										<option value="Transport">
											Transport
										</option>
										<option value="Fun">Fun</option>
										<option value="Rent">Rent</option>
										<option value="Income">Income</option>
									</select>
								</div>
								<div className="mb-3">
									<label
										htmlFor={`edit-date-${transaction.id}`}
										className="form-label"
									>
										Date
									</label>
									<input
										type="date"
										className="form-control"
										id={`edit-date-${transaction.id}`}
										defaultValue={formattedDate}
										// placeholder={formattedDate}
										onChange={(e) => {
											setDate(e.target.value);
										}}
										required
									/>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-main w-100"
							>
								Save
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditTransaction;
