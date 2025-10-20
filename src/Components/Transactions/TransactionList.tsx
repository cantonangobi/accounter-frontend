import TransactionListItem from "./TransactionListItem";

interface TransactionListProps {
	transaction_list: any;
}

function TransactionList({ transaction_list }: TransactionListProps) {
	return (
		<div className="card p-2 container-fluid min-h-100 h-md-auto ">
			{transaction_list.map((transaction: any) => (
				<TransactionListItem
					transaction={transaction}
					key={transaction.id}
				/>
			))}
		</div>
	);
}

export default TransactionList;
