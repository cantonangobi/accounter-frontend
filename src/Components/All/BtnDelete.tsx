import type { ReactNode } from "react";

interface BtnDeleteProps {
	modalId: string;
	children: ReactNode;
}
function BtnDelete({ modalId, children }: BtnDeleteProps) {
	const MODAL_TARGET = `#${modalId}`;
	return (
		<>
			<button
				className="btn btn-danger py-1 px-2 mx-tiny"
				type="button"
				data-bs-toggle="modal"
				data-bs-target={MODAL_TARGET}
			>
				<i className="fa-solid fa-trash"></i>
				{children}
			</button>
		</>
	);
}

export default BtnDelete;
