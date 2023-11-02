import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
//import axios from 'axios';

const Login = () => {
    // const { signIn, googleSignIn } = useContext(AuthContext);
    const {signIn, googleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire(
                        'Welcome!',
                        'You are logged in!',
                        'success'
                    )
                }

                //get access token
                // const user = { email };
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.success) {
                //             navigate(location?.state ? location?.state : '/')
                //         }
                //     })


                navigate(location?.state ? location?.state : '/')

            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email or Password is wrong!',
                    })
                }
            })


    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                if (res.user) {
                    Swal.fire(
                        'Welcome!',
                        'You are logged in!',
                        'success'
                    )
                }
                navigate('/');
            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Google Authentication failed!',
                    })
                }

            })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 border-2 p-10">
                        <form onSubmit={handleLogin} className="card-body">
                            <h3 className="text-center text-4xl font-bold">Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn text-white w-full bg-[#FF3811]" type="submit" value="Sign In" />
                            </div>
                            <div className="text-center">
                                <p>or</p>
                                <div className="flex gap-4 justify-center pt-2">
                                    <FaGoogle onClick={handleGoogleLogin} className="text-4xl p-2 bg-[#FF3811] rounded-full text-white hover:text-black"></FaGoogle>
                                    <FaFacebook className="text-4xl p-2 bg-[#FF3811] rounded-full text-white hover:text-black"></FaFacebook>
                                    <FaGithub className="text-4xl p-2 bg-[#FF3811] rounded-full text-white hover:text-black"></FaGithub>
                                </div>
                            </div>
                        </form>
                        <p className='text-center'>New to Car Doctor? <Link to='/register' className='underline font-bold text-[#FF3811]'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;