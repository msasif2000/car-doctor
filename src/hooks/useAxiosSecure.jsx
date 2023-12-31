import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-ruddy-seven.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOut } = useAuth();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('log out the user');
                signOut()
                    .then(() => { })
                    .catch(error => console.log(error))
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;