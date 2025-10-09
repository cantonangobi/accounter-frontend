import axios from "axios";
import { useState, type FormEvent } from "react";
// import { AuthContext, setSessionAuth } from "./AuthProvider";
import { useNavigate, useLocation } from "react-router";

const URL = "http://localhost:8080/api/v1/auth/authenticate";
function Login() {
	// const authContext = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault(); // Prevents the default browser form submission behavior
		axios
			.post(URL, { email: email, password: password })
			.then((response) => {
				if (response.status === 200) {
					const userResponse = response.data.user;
					const tokenResponse = response.data.token;

					if (userResponse && tokenResponse) {
						window.sessionStorage.setItem(
							"sessionUser",
							JSON.stringify(userResponse)
						);
						window.sessionStorage.setItem(
							"sessionToken",
							`Bearer ${tokenResponse}`
						);
					} else {
						console.error(
							"Something Went Wrong. The user or token was null "
						);
					}

					navigate(from, { replace: true });
				} else {
					console.error("Something Went Wrong. response status: ");
					console.error(response.status);
				}
			})
			.catch((error) => {
				console.error("Something Went Wrong. Server Response: ");
				console.error(error);
			});
	};
	return (
		<main className="container-fluid flex-fill">
			<div className="row h-100">
				<div className="col-12 col-sm-6 bg-main h-100 text-start p-3">
					<h1 className="text-white font-nova">Accounter</h1>
				</div>
				<div className="col-12 col-sm-6 h-100 d-flex align-items-center">
					<form
						className="w-50 m-auto text-start"
						onSubmit={(e: FormEvent) => {
							handleSubmit(e);
						}}
					>
						<h1 className="mb-3">Log In</h1>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
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
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="stay-logged-in"
							/>
							<label
								className="form-check-label"
								htmlFor="stay-logged-in"
							>
								Keep me logged in
							</label>
						</div>
						<button
							type="submit"
							className="btn btn-main form-control"
						>
							Submit
						</button>
						<hr></hr>
						Don't have an account? <a href="/signup">Sign Up</a>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Login;
