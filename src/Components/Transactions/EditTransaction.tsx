function EditTransaction() {
	return (
		<div className="modal fade" id="edit-transaction-modal" tabIndex={-1}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1
							className="modal-title fs-3"
							id="edit-transaction-modal-label"
						>
							Edit Transaction
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
								<div className="input-group d-flex mb-3 w-100">
									<input
										type="radio"
										className="btn-check invisible"
										name="type"
										id="edit-expense"
										autoComplete="off"
									/>
									<label
										className="btn btn-outline-primary flex-fill rounded-start"
										htmlFor="edit-expense"
									>
										Expense
									</label>

									<input
										type="radio"
										className="btn-check"
										name="type"
										id="edit-income"
										autoComplete="off"
									/>
									<label
										className="btn btn-outline-primary flex-fill"
										htmlFor="edit-income"
									>
										Income
									</label>
								</div>

								<div className="mb-3">
									<label
										htmlFor="edit-amount"
										className="form-label"
									>
										Amount
									</label>
									<input
										type="number"
										className="form-control"
										id="edit-amount"
										required
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="edit-select-account"
										className="form-label"
									>
										Account
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id="edit-select-account"
										required
									>
										<option value="1">Account 1</option>
										<option value="2">Account 2</option>
										<option value="3">Account 3</option>
										<option value="4">Account 4</option>
									</select>
								</div>
								<div className="mb-3">
									<label
										htmlFor="edit-select-category"
										className="form-label"
									>
										Category
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										id="edit-select-category"
										required
									>
										<option value="1">Category 1</option>
										<option value="2">Category 2</option>
										<option value="3">Category 3</option>
										<option value="4">Category 4</option>
									</select>
								</div>
							</div>

							<button
								type="submit"
								className="btn btn-main w-100"
							>
								Save
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditTransaction;
