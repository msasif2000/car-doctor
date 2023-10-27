import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }, [url])
    //console.log(bookings);
    return (
        <div>
            <h3 className="text-center text-xl">Your Bookings: {bookings.length}</h3>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Service Information</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            bookings.map(booking => <Booking key={booking._id} booking= {booking}></Booking>)
                        }                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;