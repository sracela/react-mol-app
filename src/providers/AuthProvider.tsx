import React, { ReactNode, createContext, useState } from "react";
import { fakeAuth } from "../db/auth";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthContextProps {
  token: string | null;
  onLogin: () => void;
  onLogout: () => void;
}

const initialState: AuthContextProps = {
  token: null,
  onLogin: () => {},
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

  const handleLogin = async () => {
    const token = await fakeAuth();

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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
