export function setSessionUser(user: any) {
	window.sessionStorage.setItem("sessionUser", JSON.stringify(user));
}

export function setSessionToken(jwtToken: string) {
	window.sessionStorage.setItem("sessionToken", `Bearer ${jwtToken}`);
}

export function getSessionUser() {
	return window.sessionStorage.getItem("sessionUser");
}

export function getSessionToken() {
	return window.sessionStorage.getItem("sessionToken");
}

export function resetSession() {
	window.sessionStorage.clear();
}

export function sessionExists() {
	if (
		getSessionUser() !== null &&
		getSessionUser() !== "null" &&
		getSessionToken() !== null &&
		getSessionToken() !== "null"
	) {
		return true;
	}
	return false;
}
