import { useParams } from "react-router";
import ConfirmDelete from "../All/ConfirmDelete";
import TransactionListItem from "../Transactions/TransactionListItem";
import EditAccount from "./EditAccount";

interface AccountDetailsProps {
	transactions: any;
}

function AccountDetails({ transactions }: AccountDetailsProps) {
	const { id } = useParams<{ id: string }>();
	return (
		<main className="container-fluid d-flex flex-column h-100">
			<div className="card">
				<div className="card-header d-flex justify-content-between">
					<span className="fs-2 d-flex my-auto">
						<a href="/accounts">
							<i className="fa-solid fa-chevron-left text-black"></i>
						</a>
						<h1 className="m-0">Account Details</h1>
					</span>
					{/* <h1 className="fs-2 m-0">
						<a href="accounts" className="border">
							<i className="fa-solid fa-chevron-left text-black"></i>
						</a>
						Account Details
					</h1> */}
					<span className="my-auto">
						<button
							className="btn btn-main py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#edit-account-modal"
						>
							<i className="fa-solid fa-pencil"></i>
							Edit
						</button>
						<EditAccount />
						<button
							className="btn btn-danger py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#confirm-delete"
						>
							<i className="fa-solid fa-trash"></i>
							Delete
						</button>
						<ConfirmDelete />
					</span>
				</div>
				<div className="card-body m-1 px-4 text-start fs-4">
					<div className="my-2">
						<strong className="fs-3">Account Name: </strong>
						Account {id}
					</div>

					<div className="my-2">
						<strong className="fs-3">Balance: </strong>
						balance
					</div>
				</div>
				{/* <div className="card-footer"></div> */}
			</div>
			<div className="card my-2 flex-fill">
				<div className="card-header text-start">
					<h2 className="m-0">Transactions</h2>
				</div>
				<div className="card-body p-1">
					{transactions.map((transaction: any) => (
						<TransactionListItem transaction={transaction} />
					))}

					{/* <TransactionListItem />
					<TransactionListItem />
					<TransactionListItem /> */}
				</div>
			</div>
		</main>
	);
}

export default AccountDetails;
