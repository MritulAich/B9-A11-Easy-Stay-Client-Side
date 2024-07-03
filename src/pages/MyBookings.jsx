import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookings = () => {
    const loadRooms = useLoaderData();
    const [rooms, setRoom] = useState(loadRooms);
    // useEffect(() => {
    //     fetch('http://localhost:5000/rooms')
    //         .then(res => res.json())
    //         .then(data => setRoom(data))
    // }, [])

    const handleCancel = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel Booking"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/rooms/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your booking has been canceled.",
                                icon: "success"
                            })
                            const remaining = rooms.filter(cof => cof._id !== _id);
                            setRoom(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='lg:m-5 md:m-3 lg:mt-10 mt-6'>
            <table className="table ">
                <thead>
                    <tr className="lg:text-lg md:text-lg">
                        <th>Room Category</th>
                        <th>Cost</th>
                        <th>Cancel Booking</th>
                        <th>Update Date</th>
                    </tr>
                </thead>
                {rooms.map(room =>
                    <tbody key={room._id}>
                        <tr className="hover">
                            <th>{room.room_type}</th>
                            <td>{room.price_per_night}</td>
                            <td><div onClick={() => handleCancel(room._id)} className="btn btn-neutral">Cancel</div></td>
                            <td className="space-y-1">
                                <div className="btn btn-accent">Update</div>
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default MyBookings;