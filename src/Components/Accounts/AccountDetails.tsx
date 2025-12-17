import { useNavigate, useParams } from "react-router";
import ConfirmDelete from "../All/ConfirmDelete";
import TransactionListItem from "../Transactions/TransactionListItem";
import EditAccount from "./EditAccount";
import BtnEdit from "../All/BtnEdit";
import BtnDelete from "../All/BtnDelete";
import { useEffect, useState } from "react";
import { getSessionToken } from "../Security/SessionManagement";
import Axios from "../Api/Axios";
import CreateTransaction from "../Transactions/CreateTransaction";

function AccountDetails() {
	const { id } = useParams<{ id: string }>();
	const GET_ACCOUNTS_URL = "/api/v1/account/getall";
	const GET_ACCOUNT_URL = `/api/v1/account/get/${id}`;
	const GET_TXNS_URL = `/api/v1/transaction/getbyaccount/${id}`;
	const [account, setAccount] = useState<any>({});
	const [transactions, setTransactions] = useState<any>([]);
	const [accounts, setAccounts] = useState<any>([]);
	const navigate = useNavigate();

	useEffect(() => {
		console.log("account: ", account);
	}, [account]);
	useEffect(() => {
		// const url = `${GET_ACCOUNT_URL}${id}`;
		const sessionToken = getSessionToken();
		console.log("session token:", sessionToken);

		// const response = getRequest(url, { Authorization: sessionToken });
		// console.log("Response", response);
		// setAccount(response);
		Axios.get(GET_ACCOUNT_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					setAccount(response.data);
				} else {
					console.log("Response Status:", response.status);
				}
			})
			.catch((error) => {
				console.error(error);
			});

		Axios.get(GET_TXNS_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(
						"transaction/getall response data: ",
						response.data
					);
					setTransactions(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		Axios.get(GET_ACCOUNTS_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(
						"accounts/getall response data: ",
						response.data
					);
					setAccounts(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	function handleDelete() {
		const DELETE_ACCOUNT_URL = `/api/v1/account/delete/${id}`;
		const sessionToken = getSessionToken();
		console.log("session token:", sessionToken);

		Axios.delete(DELETE_ACCOUNT_URL, {
			headers: { Authorization: sessionToken },
		})
			.then((response) => {
				if (response.status === 200) {
					console.log("Success!");
					// const modal = document.getElementById("confirm-delete");
					// modal?.setAttribute("class", "modal fade");
					const modalBackdrop =
						document.getElementsByClassName("modal-backdrop");
					modalBackdrop.item(0)?.remove();
					navigate("/accounts");
				}
			})
			.catch((error) => {
				console.error("Something went wrong: ", error);
			});
	}

	return (
		<main className="container-fluid d-flex flex-column h-100">
			<div className="card">
				<div className="card-header d-flex justify-content-between">
					<span className="d-flex my-auto">
						<a href="/accounts">
							<i className="fs-1 fa-solid fa-chevron-left text-black"></i>
						</a>
						<h1 className="fs-2 my-0 mx-2">
							{account.name} Details
						</h1>
					</span>
					{/* <h1 className="fs-2 m-0">
						<a href="accounts" className="border">
							<i className="fa-solid fa-chevron-left text-black"></i>
						</a>
						Account Details
					</h1> */}
					<span className="my-auto">
						{/* <button
							className="btn btn-main py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#edit-account-modal"
						>
							<i className="fa-solid fa-pencil"></i>
							Edit
						</button> */}
						<BtnEdit modalId="edit-account-modal">Edit</BtnEdit>
						<EditAccount account={account} />
						{/* <button
							className="btn btn-danger py-1 px-2 mx-tiny"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#confirm-delete"
						>
							<i className="fa-solid fa-trash"></i>
							Delete
						</button> */}
						<BtnDelete modalId="confirm-delete">Delete</BtnDelete>
						<ConfirmDelete
							modalId="confirm-delete"
							handleDelete={handleDelete}
						/>
					</span>
				</div>
				<div className="card-body m-1 px-4 text-center fs-4">
					{/* <div className="my-2">
						<strong className="fs-3">Name: </strong>
						{account?.name}
					</div> */}

					<div className="my-2">
						<span className="fs-3">Balance: </span>
						<span className="fs-1">{account?.balance}</span>
					</div>
				</div>
				{/* <div className="card-footer"></div> */}
			</div>
			<div className="card my-2 flex-fill">
				<div className="card-header text-start d-flex justify-content-between">
					<h2 className=" fs-2 m-0">{account.name} Transactions</h2>
					<button
						className="btn btn-main p-2"
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#create-transaction-modal"
					>
						Add Transaction
					</button>
					<CreateTransaction accounts={accounts} />
				</div>
				<div className="card-body p-1">
					{transactions.map((transaction: any) => (
						<TransactionListItem
							key={transaction.id}
							transaction={transaction}
							accounts={accounts}
						/>
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
