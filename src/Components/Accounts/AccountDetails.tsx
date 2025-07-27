import BtnDelete from "../All/BtnDelete";
import BtnEdit from "../All/BtnEdit";
import TransactionList from "../Transactions/TransactionList";
import TransactionListItem from "../Transactions/TransactionListItem";

function AccountDetails() {
	return (
		<main className="container-fluid h-100 ">
			<div className="container-fluid ">
				<div className="card">
					<div className="card-header d-flex justify-content-between">
						<h1 className="text-start">Account Details</h1>
						<span className="my-auto">
							<button className="btn btn-main p-1 mx-tiny">
								Edit
							</button>
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
				<div className="card my-2">
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
