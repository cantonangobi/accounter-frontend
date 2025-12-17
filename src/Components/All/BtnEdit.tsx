import type { ReactNode } from "react";

interface BtnEditProps {
	modalId: string;
	children: ReactNode;
}
function BtnEdit({ modalId, children }: BtnEditProps) {
	const MODAL_TARGET = `#${modalId}`;
	return (
		<button
			className="btn btn-main py-1 px-2 mx-tiny rounded-pill"
			type="button"
			data-bs-toggle="modal"
			data-bs-target={MODAL_TARGET}
		>
			<i className="fa-solid fa-pencil"></i>
			{children}
		</button>
	);
}

export default BtnEdit;
