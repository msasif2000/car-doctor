import { BiRightArrowAlt } from 'react-icons/bi';
import {PropTypes} from 'prop-types'
const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card border-2 rounded-xl shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body px-10">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between items-center text-[#FF3811] font-bold text-xl'>
                        <p>Price: ${price}</p>
                        <BiRightArrowAlt className='text-3xl'></BiRightArrowAlt>
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