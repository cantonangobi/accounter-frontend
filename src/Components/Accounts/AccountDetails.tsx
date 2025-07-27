import TransactionListItem from "../Transactions/TransactionListItem";
import EditAccount from "./EditAccount";

function AccountDetails() {
	return (
		<main className="container-fluid h-100 ">
			<div className="d-flex h-100 flex-column">
				<div className="card">
					<div className="card-header d-flex justify-content-between">
						<h1 className="text-start">Account Details</h1>
						<span className="my-auto">
							<button
								className="btn btn-main p-1 mx-tiny"
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#edit-account-modal"
							>
								Edit
							</button>
							<EditAccount />
							<button className="btn btn-danger p-1 mx-tiny">
								Delete
							</button>
						</span>
					</div>
					<div className="card-body m-1 p-2 text-start">
						<div className="m-2">
							<strong>Name:</strong> Account Name
						</div>

						<div className="m-2">
							<strong>Balance:</strong> Account Balance
						</div>
					</div>
					{/* <div className="card-footer"></div> */}
				</div>
				<div className="card my-2 flex-fill">
					<div className="card-header text-start">
						<h2>Transactions</h2>
					</div>
					<div className="card-body p-1">
						<TransactionListItem />
						<TransactionListItem />
						<TransactionListItem />
						<TransactionListItem />
					</div>
				</div>
			</div>
		</main>
	);
}

export default AccountDetails;
