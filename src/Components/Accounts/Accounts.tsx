import AccountList from "./AccountList";
import AccountSideBar from "./AccountSideBar";

function Accounts() {
	return (
		<main className="container-fluid flex-fill ">
			<div className="row gx-2 h-100">
				<div className="col-md-3 p-2 h-100 h-md-auto ">
					<AccountSideBar />
				</div>
				<div className="col-md-9 p-2 min-h-100 h-md-auto">
					<AccountList />
				</div>
			</div>
		</main>
	);
}

export default Accounts;
