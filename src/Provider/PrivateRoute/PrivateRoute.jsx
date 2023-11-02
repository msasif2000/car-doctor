import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <progress className="progress w-56 mx-auto"></progress>
    }
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login' replace></Navigate>;
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;