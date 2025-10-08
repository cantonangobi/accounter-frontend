import {
	createContext,
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

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export const getSessionAuth = () => {
	return window.localStorage.getItem("authContext");
};

export const setSessionAuth = (authContext: AuthModel) => {
	window.localStorage.setItem("authContext", JSON.stringify(authContext));
};
