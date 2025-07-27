import AccountListItem from "./AccountListItem";

function AccountList() {
	return (
		<div className="list-group card p-2 container-fluid min-h-100 h-md-auto ">
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
			<AccountListItem />
		</div>
	);
}

export default AccountList;
