function AccountListItem() {
	return (
		<a className="list-item card p-4 m-1" href="account-details">
			<div className="row">
				<div className="col-6 text-start">Account</div>
				<div className="col-6 text-end">Balance</div>
			</div>
		</a>
	);
}

export default AccountListItem;
