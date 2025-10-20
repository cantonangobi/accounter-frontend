import { useState, type FormEvent } from "react";
import { getSessionToken } from "../Security/SessionManagement";
import Axios from "../Api/Axios";

const CREATE_ACCOUNT_URL = "/api/v1/account/create";
function CreateAccount() {
	const [name, setName] = useState("");
	const [balance, setBalance] = useState("");

	console.log("name: ", name);
	console.log("balance: ", balance);

	const handleCreateAccount = (e: FormEvent) => {
		e.preventDefault();

		const sessionToken = getSessionToken();

		Axios.post(CREATE_ACCOUNT_URL, { headers: "" });
	};

	return (
		<div className="modal fade" id="create-account-modal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							id="create-account-modal-label"
						>
							Create Account
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
							onSubmit={(e) => handleCreateAccount(e)}
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
									onChange={(e) => setName(e.target.value)}
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
									onChange={(e) => {
										setBalance(e.target.value);
									}}
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-main btn-block"
							>
								Create Account
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

export default CreateAccount;
