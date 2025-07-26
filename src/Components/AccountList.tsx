import AccountListItem from "./AccountListItem";
import TransactionListItem from "./TransactionListItem";

function AccountList() {
	return (
		<div className="card p-2 container-fluid min-h-100 h-md-auto ">
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
			<TransactionListItem />
		</div>
	);
}

export default AccountList;
