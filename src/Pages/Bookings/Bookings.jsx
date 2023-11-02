import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";
//import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `https://car-doctor-server-ruddy-seven.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data);
        //     })
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])

    const handleDelete = (id) => {
        const del = confirm('Are you sure to delete?');
        if (del) {
            fetch(`https://car-doctor-server-ruddy-seven.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        fetch(`https://car-doctor-server-ruddy-seven.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update Status Successfully!');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'Approved';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })

    }
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
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;