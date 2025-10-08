function SignUp() {
	return (
		<main className="container-fluid flex-fill">
			<div className="row h-100">
				<div className="col-12 col-sm-6 bg-main h-100 text-start p-3">
					<h1 className="text-white font-nova">Accounter</h1>
				</div>
				<div className="col-12 col-sm-6 h-100 d-flex align-items-center">
					<form className="w-50 m-auto text-start">
						<h1 className="mb-3">Sign Up</h1>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								required
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="confirm-password"
								className="form-label"
							>
								Confirm Password
							</label>
							<input
								type="password"
								className="form-control"
								id="confirm-password"
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-main form-control"
						>
							Submit
						</button>
						<hr></hr>
						Already have an account? <a href="#">Log In</a>
					</form>
				</div>
			</div>
		</main>
	);
}

export default SignUp;
