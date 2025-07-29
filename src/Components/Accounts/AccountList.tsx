import AccountListItem from "./AccountListItem";

interface AccountListProps {
	accounts: any;
}

function AccountList({ accounts }: AccountListProps) {
	return (
		<div className="list-group card p-2 container-fluid min-h-100 h-md-auto ">
			{accounts.map((account: any) => (
				<AccountListItem account={account} />
			))}
		</div>
	);
}

export default AccountList;
