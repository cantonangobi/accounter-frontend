import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Security/AuthProvider";
const BASE_URL = "http://localhost:8080/api/v1/auth/test";

function Layout() {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		console.log("Auth testing...");
		console.log(authContext?.auth.token);
		if (!authContext?.auth.token) {
			navigate("/login", {
				state: { from: location },
				replace: true,
			});
			// return;
		}

		axios
			.get(BASE_URL, {
				headers: { Authorization: authContext?.auth.token },
			})
			.then((response) => {
				console.log(`Server Status: ${response.status}`);
				console.log(`data: ${response.data}`);
				if (response.status !== 200) {
					// 	tokenValid = true;
					// 	console.log("Token is valid");
					// } else {
					// tokenValid = false;
					navigate("/login", {
						state: { from: location },
						replace: true,
					});
				}
			})
			.catch((error) => {
				console.error(`Server Error: ${error}`);
				// tokenValid = false;
				navigate("/login", {
					state: { from: location },
					replace: true,
				});
			});
	}, []);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Layout;
