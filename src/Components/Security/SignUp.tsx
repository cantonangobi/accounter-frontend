import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import { setSessionToken, setSessionUser } from "./SessionManagement";

const REGISTER_URL = "/api/v1/auth/register";

function SignUp() {
	// const location = useLocation();
	// const from = location.state?.from?.pathname || "/";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [passMatch, setPassMatch] = useState(false);
	console.log("Password: ", password);
	console.log("Confirm Password: ", confirmPass);
	console.log("Password matched: ", passMatch);

	const navigate = useNavigate();
	useEffect(() => {
		if (password && password == confirmPass) {
			setPassMatch(true);
		} else {
			setPassMatch(false);
		}
	}, [password, confirmPass]);

	const handleRegister = (event: FormEvent) => {
		event.preventDefault();

		if (!passMatch) {
			return;
		}

		Axios.post(REGISTER_URL, {
			first_name: email,
			last_name: email,
			email: email,
			password: password,
		})
			.then((response) => {
				if (response.status === 200) {
					const userResponse = response.data.user;
					const tokenResponse = response.data.token;

					if (userResponse && tokenResponse) {
						setSessionUser(userResponse);
						setSessionToken(tokenResponse);
					} else {
						console.error(
							"Something Went Wrong. The user or token was null "
						);
					}
					console.log("User Created");
					// setSessionUser(response.data.user);
					// setSessionToken(`Bearer ${response.data.token}`);
					navigate("/");
				} else {
					console.log("Response status:", response.status);
				}
			})
			.catch((error) => {
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
						onSubmit={handleRegister}
					>
						<h1 className="mb-3">Sign Up</h1>
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
								onChange={(e) => {
									setPassword(e.target.value);
								}}
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
							<div
								className={
									passMatch || !password || !confirmPass
										? "d-none"
										: "alert alert-warning m-0 p-1"
								}
								role="alert"
							>
								Passwords do not match
							</div>
							<input
								type="password"
								className="form-control"
								id="confirm-password"
								onChange={(e) => {
									setConfirmPass(e.target.value);
								}}
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-main form-control"
							disabled={!passMatch}
						>
							Submit
						</button>
						<hr></hr>
						Already have an account? <a href="/login">Log In</a>
					</form>
				</div>
			</div>
		</main>
	);
}

export default SignUp;
