import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../All/Header";
import axios from "axios";
import { useEffect } from "react";
const URL = "http://localhost:8080/api/v1/auth/test";

function Layout() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const sessionUser = window.sessionStorage.getItem("sessionUser");
		const sessionToken = window.sessionStorage.getItem("sessionToken");
		if (sessionUser && sessionToken) {
			axios
				.get(URL, {
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
						`Server Error: ${error}, redirecting to login`
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

export default Layout;
