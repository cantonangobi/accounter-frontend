function ConfirmDelete() {
	return (
		<div className="modal fade" id="confirm-delete" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h5 className="modal-title">Delete?</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p>
							Are you sure you want to Delete? This action is
							irreversible.
						</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Cancel
						</button>
						<button type="button" className="btn btn-danger">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDelete;
