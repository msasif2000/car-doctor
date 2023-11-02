import PropTypes from 'prop-types';

const Booking = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, customerName, service, img, email, date, phone, price, status } = booking


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{service}</div>
                        <div className="text-xl ">Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'Approved' ?
                        <span className='btn btn-ghost btn-xs text-green-700 font-bold border-green-600 border-2'>Approved</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs text-white font-bold  bg-[#FF3811]">Pending</button>
                }

            </th>
        </tr>

    );
};

Booking.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired
}
export default Booking;