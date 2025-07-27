import CreateAccount from "./CreateAccount";

function AccountSideBar() {
	return (
		<div className="card p-2 h-100 h-md-auto container-fluid text-center sidebar">
			<h1 className="m-2">Accounts</h1>
			<button
				className="btn btn-main m-2 p-2"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#create-account-modal">
				Add Account
			</button>

			<CreateAccount />
		</div>
	);
}

export default AccountSideBar;
