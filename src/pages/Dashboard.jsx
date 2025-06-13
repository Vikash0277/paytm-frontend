import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Dashboard() {
    return <div className="">
        <Appbar  />
        <div className="m-4">
            
            <div>
                <Balance  />
                <Users/>
            </div>
        </div>
    </div>
}

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );


  return auth ? children : <Navigate to="/signin" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProtectedRoute };
  