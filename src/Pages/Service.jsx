import { BiRightArrowAlt } from 'react-icons/bi';
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card border-2 rounded-xl shadow-xl">
                <figure className=" p-4">
                    <img src={img} alt="Service Image" className="rounded-xl h-[220px] w-full" />
                </figure>
                <div className="card-body px-10">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between items-center text-[#FF3811] font-bold text-xl'>
                        <p>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                        <BiRightArrowAlt className='text-3xl'></BiRightArrowAlt>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}
export default Service;