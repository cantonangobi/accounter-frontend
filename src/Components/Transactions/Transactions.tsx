import TransactionList from "./TransactionList";
import TransactionSideBar from "./TransactionSideBar";

interface TransactionListProps {
	transactions: any;
}

function Transactions({ transactions }: TransactionListProps) {
	return (
		<main className="container-fluid flex-fill ">
			<div className="row gx-2 h-100">
				<div className="col-md-3 p-2 h-100 h-md-auto ">
					<TransactionSideBar />
				</div>
				<div className="col-md-9 p-2 min-h-100 h-md-auto">
					<TransactionList transactions={transactions} />
				</div>
			</div>
		</main>
	);
}

export default Transactions;
