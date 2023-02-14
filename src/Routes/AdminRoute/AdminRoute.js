import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Loading/Loading';

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    const navigate = useNavigate();

    if (loading && isAdminLoading) {
        return <Loading />
    }

    if (!user && !isAdmin) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;


};

export default AdminRoute;