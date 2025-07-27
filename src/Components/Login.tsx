function Login() {
	return (
		<main className="container-fluid h-100">
			<div className="row h-100">
				<div className="col-12 col-sm-6 bg-main h-100 text-start p-3">
					<h1 className="text-white font-nova">Accounter</h1>
				</div>
				<div className="col-12 col-sm-6 h-100 d-flex align-items-center">
					<form className="w-50 m-auto text-start">
						<h1 className="mb-3">Log In</h1>
						<div className="mb-3">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label
								className="form-check-label"
								htmlFor="exampleCheck1">
								Keep me logged in
							</label>
						</div>
						<button type="submit" className="btn btn-main w-100">
							Submit
						</button>
						<hr></hr>
						Don't have an account? <a href="#">Sign Up</a>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Login;
