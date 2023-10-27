import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Register = () => {
    const {createUser, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(res => {
            if(res.user){
                Swal.fire(
                    'Welcome!',
                    'You are logged in!',
                    'success'
                  )
            }
            navigate('/');
        })
        .catch(error => {
            if(error.message){
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
                        <form onSubmit={handleSignIn} className="card-body">
                            <h3 className="text-center text-4xl font-bold">Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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

                                <input className="btn text-white w-full bg-[#FF3811]" type="submit" value="Sign Up" />
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
                        <p className='text-center'>Already Have an Account? <Link to='/login' className='underline font-bold text-[#FF3811]'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;