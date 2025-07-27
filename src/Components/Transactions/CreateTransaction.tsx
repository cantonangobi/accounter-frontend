function CreateTransaction() {
	return (
		<div className="modal fade" id="create-transaction-modal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							id="create-transaction-modal-label"
						>
							Create Transaction
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
						></button>
					</div>
					<div className="modal-body">
						<form className="text-start">
							<div className="mb-3">
								<div className="mb-3">
									<label
										htmlFor="amount"
										className="form-label"
									>
										Amount
									</label>
									<input
										type="number"
										className="form-control"
										id="amount"
										required
									/>
								</div>
								<select
									className="form-select"
									aria-label="Default select example"
								>
									<option selected>
										Open this select menu
									</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>

								<label
									htmlFor="account-name"
									className="form-label"
								>
									Account Name
								</label>
								<input
									type="text"
									className="form-control"
									id="account-name"
									required
								/>
							</div>

							<button
								type="submit"
								className="btn btn-main w-100"
							>
								Create Transaction
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateTransaction;
