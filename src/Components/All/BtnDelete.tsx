import type { ReactNode } from "react";
import ConfirmDelete from "./ConfirmDelete";

interface BtnDeleteProps {
	modal_target: string;
	children: ReactNode;
}
function BtnDelete({ modal_target, children }: BtnDeleteProps) {
	return (
		<>
			<button
				className="btn btn-danger py-1 px-2 mx-tiny"
				type="button"
				data-bs-toggle="modal"
				data-bs-target={modal_target}
			>
				<i className="fa-solid fa-trash"></i>
				{children}
			</button>
		</>
	);
}

export default BtnDelete;
