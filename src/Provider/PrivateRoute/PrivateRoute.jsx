import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        <progress className="progress w-56 mx-auto"></progress>
    }
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate to='/login' replace></Navigate>;
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;