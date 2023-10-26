import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

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
                        </form>
                        <p className='text-center'>Already Have an Account? <Link to='/login' className='underline font-bold'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;