import { useState, type FormEvent } from "react";
import { getSessionToken } from "../Security/SessionManagement";
import Axios from "../Api/Axios";

interface EditAccountProps {
	account: any;
}

function EditAccount({ account }: EditAccountProps) {
	const [name, setName] = useState(account.name);
	const [balance, setBalance] = useState(account.balance);

	console.log(account.name);
	console.log(account.balance);

	console.log(name);
	console.log(balance);

	// setName(account.name);
	// setBalance(account.balance);
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	setName(account.name);
	// 	setBalance(account.balance);
	// 	console.log("balance: ", balance);
	// }, [name, balance]);

	const handleUpdateAccount = (e: FormEvent) => {
		e.preventDefault();
		const EDIT_ACCOUNT_URL = `/api/v1/account/update/${account.id}`;
		const sessionToken = getSessionToken();
		let accountName = name;
		let accountBalance = balance;

		if (!name) {
			accountName = account.name;
		}
		if (!balance) {
			accountBalance = account.balance;
		}
		Axios.post(
			EDIT_ACCOUNT_URL,
			{ name: accountName, balance: accountBalance },
			{ headers: { Authorization: sessionToken } }
		)
			.then((response) => {
				if (response.status === 200) {
					console.log("Success!");
					const modal = document.getElementById("edit-account-modal");
					modal?.setAttribute("class", "modal fade");
					const modalBackdrop =
						document.getElementsByClassName("modal-backdrop");
					modalBackdrop.item(0)?.remove();
					window.location.reload();
				}
			})
			.catch((error) => {
				console.error("Something went wrong: ", error);
			});
	};
	return (
		<div className="modal fade" id="edit-account-modal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							id="edit-account-modal-label"
						>
							Edit Account
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
						></button>
					</div>
					<div className="modal-body">
						<form
							onSubmit={handleUpdateAccount}
							className="text-start"
						>
							<div className="mb-3">
								<label
									htmlFor="account-name"
									className="form-label"
								>
									Account Name
								</label>
								<input
									type="text"
									className="form-control"
									id="account-name"
									defaultValue={account.name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="amount" className="form-label">
									Initial Balance
								</label>
								<input
									type="number"
									className="form-control"
									id="amount"
									defaultValue={account.balance}
									// onLoad={(e) => setBalance(e.currentTarget.value)}
									onChange={(e) => setBalance(e.target.value)}
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-main btn-block"
							>
								Save
							</button>
						</form>
					</div>
					{/* <div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default EditAccount;
