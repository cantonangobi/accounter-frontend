import {
	createContext,
	useEffect,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

export interface AuthModel {
	user: any;
	token: string | null;
}

export interface AuthContextModel {
	auth: AuthModel;
	setAuth: Dispatch<SetStateAction<AuthModel>>;
}

export const AuthContext = createContext<AuthContextModel | null>(null);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	let temp = {
		user: null,
		token: null,
	};

	const [auth, setAuth] = useState<AuthModel>(temp);
	useEffect(() => {
		const sessionAuth = getSessionAuth();
		if (sessionAuth !== null && sessionAuth !== "null") {
			const authJSON = JSON.parse(sessionAuth);
			temp.user = authJSON.user;
			temp.token = authJSON.token;

			setAuth(temp);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export const getSessionAuth = () => {
	return window.sessionStorage.getItem("authContext");
};

export const setSessionAuth = (authContext: AuthModel | null) => {
	window.sessionStorage.setItem("authContext", JSON.stringify(authContext));
};
