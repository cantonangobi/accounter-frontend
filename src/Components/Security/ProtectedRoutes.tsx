import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../All/Header";
// import axios from "axios";
import { useEffect } from "react";
import {
	getSessionToken,
	getSessionUser,
	sessionExists,
} from "./SessionManagement";
import Axios from "../Api/Axios";
const CONNECTION_TEST_URL = "/api/v1/auth/test";

function ProtectedRoutes() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// const sessionUser = getSessionUser();
		const sessionToken = getSessionToken();
		if (sessionExists()) {
			Axios.get(CONNECTION_TEST_URL, {
				headers: { Authorization: sessionToken },
			})
				.then((response) => {
					if (response.status !== 200) {
						console.log(
							"Invalid session token, redirecting to login"
						);
						navigate("/login", {
							state: { from: location },
							replace: true,
						});
					}
				})
				.catch((error) => {
					console.error(
						"Server Error:",
						error,
						"redirecting to login"
					);
					navigate("/login", {
						state: { from: location },
						replace: true,
					});
				});
		} else {
			console.log(
				"session user or session token is null, redirecting to login"
			);
			navigate("/login", {
				state: { from: location },
				replace: true,
			});
		}
	}, []);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default ProtectedRoutes;
