import { useContext } from "react";
import { AuthContext, setSessionAuth } from "../Security/AuthProvider";
import { useNavigate } from "react-router";

function Header() {
	const authContext = useContext(AuthContext);

	const navigate = useNavigate();

	const handleSignOut = () => {
		const auth = {
			user: null,
			token: null,
		};
		authContext?.setAuth(auth);
		setSessionAuth(auth);
		navigate("/login", { replace: true });
	};
	return (
		<>
			<header className="bg-main  p-1 mb-2 border-bottom sticky-top">
				<div className="container-fluid">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<a
							href="/"
							className="logo font-nova d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none text-white"
						>
							Accounter
						</a>
						<ul className="nav-font nav col-12 col-lg-auto mx-5 me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<a
									href="/"
									className="nav-link px-2 text-white link-body-emphasis"
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="/accounts"
									className="nav-link px-2 link-body-emphasis text-white"
								>
									Accounts
								</a>
							</li>
							<li>
								<a
									href="/transactions"
									className="nav-link px-2 link-body-emphasis text-white"
								>
									Transactions
								</a>
							</li>
						</ul>
						<div className="dropdown text-end ">
							<a
								href="#"
								className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="src/assets/profile.png"
									alt="profile"
									width="40"
									height="40"
									className="rounded-circle"
								/>
							</a>
							<ul className="dropdown-menu text-small">
								<li>
									<a className="dropdown-item" href="#">
										Settings
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Profile
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<button
										className="dropdown-item"
										onClick={handleSignOut}
									>
										Sign out
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
