import { useState, type FormEvent } from "react";
import { getSessionToken } from "../Security/SessionManagement";
import Axios from "../Api/Axios";

const CREATE_TXN_URL = "/api/v1/transaction/create";

interface Props {
	accounts: any[];
}
function CreateTransaction({ accounts }: Props) {
	const getCurrentDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(today.getDate()).padStart(2, "0");
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	};

	const [accountName, setAccountName] = useState("");
	const [category, setCategory] = useState("");
	const [amount, setAmount] = useState("0");
	const [type, setType] = useState("EXPENSE");
	const currentDate = getCurrentDate();
	const [date, setDate] = useState(currentDate);

	// const navigate = useNavigate();

	console.log("type: ", type);
	console.log("account: ", accountName);
	console.log("category: ", category);
	console.log("amount: ", amount);
	console.log("date: ", date);

	const handleCreateTransaction = (e: FormEvent) => {
		e.preventDefault();

		// var final_amount = amount;
		// if (type === "expense") {
		// 	final_amount = `-${amount}`;
		// }

		const sessionToken = getSessionToken();

		Axios.post(
			CREATE_TXN_URL,
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
				if (response.status === 201) {
					console.log("Success!");
					const modal = document.getElementById(
						"create-transaction-modal"
					);
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
		<div className="modal fade" id="create-transaction-modal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							id="create-transaction-modal-label"
						>
							Create Transaction
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
							onSubmit={handleCreateTransaction}
						>
							<div className="mb-3">
								<div className="input-group d-flex mb-3 w-100">
									<input
										type="radio"
										className="btn-check invisible"
										name="type"
										id="create-expense"
										value="EXPENSE"
										autoComplete="off"
										defaultChecked={true}
										onChange={(e) => {
											setType(e.target.value);
										}}
									/>
									<label
										className="btn btn-outline-primary flex-fill rounded-start"
										htmlFor="create-expense"
									>
										Expense
									</label>

									<input
										type="radio"
										className="btn-check"
										name="type"
										id="create-income"
										value="INCOME"
										autoComplete="off"
										onChange={(e) => {
											setType(e.target.value);
										}}
									/>
									<label
										className="btn btn-outline-primary flex-fill"
										htmlFor="create-income"
									>
										Income
									</label>
								</div>

								<div className="mb-3">
									<label
										htmlFor="create-amount"
										className="form-label"
									>
										Amount
									</label>
									<input
										type="number"
										className="form-control"
										id="create-amount"
										min="0"
										max="1000000000"
										onChange={(e) => {
											setAmount(e.target.value);
										}}
										required
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="create-select-account"
										className="form-label"
									>
										Account
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id="create-select-account"
										onChange={(e) => {
											setAccountName(e.target.value);
										}}
										required
										defaultValue=""
									>
										<option value="" disabled>
											- Select Account -
										</option>
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
										htmlFor="create-select-category"
										className="form-label"
									>
										Category
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id="create-select-category"
										onChange={(e) => {
											setCategory(e.target.value);
										}}
										required
										defaultValue=""
									>
										<option value="" disabled>
											- Select Category -
										</option>
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
										htmlFor="create-date"
										className="form-label"
									>
										Date
									</label>
									<input
										type="date"
										className="form-control"
										id="create-date"
										defaultValue={currentDate}
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
								Create Transaction
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateTransaction;
