import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { GrLogin, GrLogout } from "react-icons/gr";
import { BsFillCarFrontFill } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    
    const {user, signOut} = useAuth();
    const navItems =
        <>
            <li> <Link className='text-xl' to='/'>Home</Link></li>
            <li> <Link className='text-xl' to='/about'>About Us</Link></li>
            <li><Link className='text-xl' to='/services'>Services</Link></li>
            <li> <Link className='text-xl' to='/blog'>Blog</Link></li>
            <li><Link className='text-xl' to='/content'>Content</Link></li>
        </>

    const handleSignOut = () => {
        signOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div className='mb-10'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="" className='h-[80px] w-[80px]' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <Link to='/myBookings'><BsFillCarFrontFill className='text-2xl mr-3'></BsFillCarFrontFill></Link>
                                <GrLogout onClick={handleSignOut} className='text-2xl mr-2'></GrLogout>

                            </>
                            :
                            <>
                                <Link to='/login'><BsFillCarFrontFill className='text-2xl mr-3'></BsFillCarFrontFill></Link>
                                <Link to='/login'><GrLogin className='text-2xl mr-2'></GrLogin></Link>
                            </>

                    }
                    <a className="p-2 px-4 border-2 border-[#FF3811] rounded text-[#FF3811] font-bold">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;