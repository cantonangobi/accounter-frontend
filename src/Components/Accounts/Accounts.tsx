import AccountList from "./AccountList";
import AccountSideBar from "./AccountSideBar";

interface AccountsProps {
	account_list: any;
}

function Accounts({ account_list }: AccountsProps) {
	return (
		<main className="container-fluid flex-fill ">
			<div className="row gx-2 h-100">
				<div className="col-md-3 p-2 h-100 h-md-auto ">
					<AccountSideBar />
				</div>
				<div className="col-md-9 p-2 min-h-100 h-md-auto">
					<AccountList accounts={account_list} />
				</div>
			</div>
		</main>
	);
}

export default Accounts;
