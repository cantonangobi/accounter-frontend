import type { ReactNode } from "react";

interface BtnEditProps {
	modal_target: string;
	children: ReactNode;
}
function BtnEdit({ modal_target, children }: BtnEditProps) {
	const MODAL_TARGET = `#${modal_target}`;
	return (
		<button
			className="btn btn-main py-1 px-2  mx-tiny"
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
