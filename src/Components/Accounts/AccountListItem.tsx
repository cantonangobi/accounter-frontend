interface AccountProps {
	account: any;
}

function AccountListItem({ account }: AccountProps) {
	return (
		<a className="list-item card p-4 m-1" href="account-details">
			<div className="row">
				<div className="col-6 text-start">{account.name}</div>
				<div className="col-6 text-end">{account.balance}</div>
			</div>
		</a>
	);
}

export default AccountListItem;
