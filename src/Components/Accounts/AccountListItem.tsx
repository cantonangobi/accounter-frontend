import { useNavigate } from "react-router-dom";

interface AccountProps {
	account: any;
}

function AccountListItem({ account }: AccountProps) {
	const navigate = useNavigate();
	function onBtnClick() {
		navigate(`/account-details/${account.id}`);
	}
	return (
		<button
			className="list-item card p-4 m-1 btn"
			type="button"
			onClick={onBtnClick}
		>
			<div className="row">
				<div className="col-6 text-start">{account.accountName}</div>
				<div className="col-6 text-end">{account.balance}</div>
			</div>
		</button>
	);
}

export default AccountListItem;
