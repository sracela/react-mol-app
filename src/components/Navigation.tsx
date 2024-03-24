import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { Button } from "@radix-ui/themes";

const Navigation = () => {
  const { token, onLogout } = useAuth();
  if (!token) return null;
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <Button className="signOut" onClick={onLogout}>
        Sign Out
      </Button>
    </nav>
  );
};

export default Navigation;
