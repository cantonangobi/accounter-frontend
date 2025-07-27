function CreateAccount() {
	return (
		<div className="modal fade" id="exampleModal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							Create Account
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"></button>
					</div>
					<div className="modal-body">
						<form className="text-start">
							{/* <h1 className="mb-3">Log In</h1> */}
							<div className="mb-3">
								<label
									htmlFor="account-name"
									className="form-label">
									Account Name
								</label>
								<input
									type="text"
									className="form-control"
									id="account-name"
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="amount" className="form-label">
									Initial Balance
								</label>
								<input
									type="number"
									className="form-control"
									id="amount"
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-main w-100">
								Create Account
							</button>
						</form>
					</div>
					{/* <div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default CreateAccount;
