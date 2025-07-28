import ConfirmDelete from "./ConfirmDelete";

function BtnDelete() {
	return (
		<>
			<button
				className="btn btn-danger py-1 px-2 mx-tiny"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#confirm-delete"
			>
				<i className="fa-solid fa-trash"></i>
			</button>
			<ConfirmDelete />
		</>
	);
}

export default BtnDelete;
