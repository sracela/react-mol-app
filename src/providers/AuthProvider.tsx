import React, { ReactNode, createContext, useState } from "react";
import { createUser, fakeAuth } from "../db/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPayload } from "../types/auth";

interface AuthContextProps {
  token: string | null;
  onLogin: (payload: LoginPayload) => Promise<void>;
  onCreateAccount: (payload: LoginPayload) => Promise<void>;
  onLogout: () => void;
}

const initialState = {
  token: null,
  onLogin: async (payload: LoginPayload) => {},
  onCreateAccount: async (payload: LoginPayload) => {},
  onLogout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initialState);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<string | null>(null);

  // this shouldn't be here, should be on an AdminProvider that takes care of all the users.
  const handleCreateAccount = async ({ email, password }: LoginPayload) => {
    const token = await createUser({ email, password });

    setToken(token);
    const origin = location.state?.from?.pathname || "/dashboard";
    navigate(origin);
  };

  const handleLogin = async ({ email, password }: LoginPayload) => {
    const token = await fakeAuth({ email, password });

    setToken(token);
    const origin = location.state?.from?.pathname || "/dashboard";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value: AuthContextProps = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onCreateAccount: handleCreateAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
