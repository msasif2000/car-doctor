import { useContext } from "react";
import { useLoaderData,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { title, price, img, _id } = service;

    const navigate = useNavigate();

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = { customerName: name, service: title, img, price, email, date, phone, service_id: _id, message }
        console.log(order);
        fetch('https://car-doctor-server-ruddy-seven.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'Your Order Placed Successfully!',
                        'success'
                      )
                }
                navigate('/myBookings')
            })
    }
    return (
        <div>

            <h3 className="text-center text-3xl">Service Name: <span className="text-[#FF3811]">{title}</span></h3>
            <p className="text-center text-3xl pb-4">Price: <span className="text-[#FF3811]">${price}</span></p>

            <div className="lg:px-24 mx-auto bg-base-200 rounded-lg">
                <div>
                    <div>
                        <form onSubmit={handleCheckOut} className="card-body">
                            <div className="md:flex gap-10">
                                <div className="md:w-1/2 flex flex-col gap-6">
                                    <div className="form-control">
                                        <input type="text" name="name" defaultValue={user?.name} placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="md:w-1/2 flex flex-col gap-6 md:mt-0 mt-6">
                                    <div className="form-control">
                                        <input type="date" name="date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <input type="text" name="message" placeholder="Your Message" className="input input-bordered md:h-[200px] h-[100px] md:pb-36 pb-16  mt-4" required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input type="submit" value="Order Confirm" className=" bg-[#FF3811] text-white font-bold py-2 rounded-xl" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;