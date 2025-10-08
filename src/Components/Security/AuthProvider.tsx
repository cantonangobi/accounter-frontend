import { createContext, type Dispatch, type SetStateAction } from "react";

export interface AuthModel {
	user: any;
	token: string | null;
	isAuthenticated: boolean;
}

export interface AuthContextModel {
	auth: AuthModel;
	setAuth: Dispatch<SetStateAction<AuthModel>>;
}

export const AuthContext = createContext<AuthContextModel | null>(null);
