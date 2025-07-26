import AccountList from "./AccountList";
import AccountSideBar from "./AccountSideBar";

function Accounts() {
	return (
		<main>
			<div className="row">
				<AccountSideBar />
				<AccountList />
			</div>
		</main>
	);
}

export default Accounts;
