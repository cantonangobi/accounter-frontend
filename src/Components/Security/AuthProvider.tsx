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
	const [auth, setAuth] = useState<AuthModel>({
		user: null,
		token: null,
	});
	// setSessionAuth(null);
	console.log("Session Auth: ");
	console.log(getSessionAuth());
	useEffect(() => {
		const sessionAuth = getSessionAuth();
		if (sessionAuth !== null && sessionAuth !== "null") {
			console.log("setting auth");
			const authJSON = JSON.parse(sessionAuth) as AuthModel;
			setAuth(authJSON);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export const getSessionAuth = () => {
	return window.localStorage.getItem("authContext");
};

export const setSessionAuth = (authContext: AuthModel | null) => {
	window.localStorage.setItem("authContext", JSON.stringify(authContext));
};
