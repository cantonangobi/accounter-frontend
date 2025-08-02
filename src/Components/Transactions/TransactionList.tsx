import TransactionListItem from "./TransactionListItem";

interface TransactionListProps {
	transactions: any;
}

function TransactionList({ transactions }: TransactionListProps) {
	return (
		<div className="card p-2 container-fluid min-h-100 h-md-auto ">
			{transactions.map((transaction: any) => (
				<TransactionListItem
					transaction={transaction}
					key={transaction.id}
				/>
			))}
		</div>
	);
}

export default TransactionList;
