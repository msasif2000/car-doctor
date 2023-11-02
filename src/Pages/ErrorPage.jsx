import { Link } from 'react-router-dom';
import err from '../assets/images/error.svg';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center mx-auto my-12'>
                <img src={err} alt="" />
            </div>
            <div className='text-center mb-6'>
                <Link to='/' className=' bg-[#FF3811] px-4 py-2 rounded text-white'>{'< Home'}</Link>
            </div>
        </div>
    );
};

export default ErrorPage;