import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
    const room = useLoaderData();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBookNow = () => {
        if (user) { return console.log('booking'); }
        else {
            navigate('/login')
        }
    }

    const handleConfirm = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You've booked this room",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const [startDate, setStartDate] = useState(new Date());

    
    return (
        <div className="bg-base-200 flex flex-col  gap-10 p-6">
            <div>
                <img className="rounded-xl lg:w-[750px] lg:h-[500px]" src={room.room_image} />
            </div>
            <div className="p-3">
                <h2 className="text-lg">Category :<span className="text-2xl font-semibold m-2 mt-0">{room.room_type}</span></h2>
                <p>Size : <span className="text-xl">{room.size}</span></p>
                <p>Availability : <span className="text-xl font-semibold">{room.availability}</span></p>
                <p className="text-lg mt-5">{room.description}</p>
                <p className="font-medium my-2 text-lg">Offers & deals : {room.special_offers}</p>


                <h2 className="text-xl font-semibold text-center underline mt-8 mb-3 text-yellow-700">Total Reviews: {room.reviews.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div>
                        <p className="text-lg font-medium">{room.reviews[0].name}</p>
                        <p> Rating: <span className="font-medium">{room.reviews[0].rating}</span></p>
                        <p> {room.reviews[0].comment}</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium">{room.reviews[1].name}</p>
                        <p> Rating: <span className="font-medium">{room.reviews[1].rating}</span></p>
                        <p> {room.reviews[1].comment}</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium">{room.reviews[2].name}</p>
                        <p> Rating: <span className="font-medium">{room.reviews[2].rating}</span></p>
                        <p> {room.reviews[2].comment}</p>
                    </div>
                </div>


                <button className="btn btn-warning text-lg mt-10" onClick={() => { handleBookNow(); document.getElementById('my_modal_2').showModal() }}>Book Now</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box py-8">
                        <h3 className="font-semibold text-lg text-center mb-2">Room Summary</h3>
                        <p className="py-2 font-medium">Cost: ${room.price_per_night}</p>
                        <p className="mb-4">{room.description}</p>
                        <p className="mb-4">Offers now: <span className="font-mono font-semibold">{room.special_offers}</span></p>
                        <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                        <button onClick={handleConfirm} className="btn btn-outline btn-success mt-2 ml-44">Confirm</button>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                <span className="text-xl mr-2 ml-4">For</span><span className='text-2xl text-green-700 underline font-semibold mb-1'>${room.price_per_night}</span>
            </div>
            <Helmet>
                <title>Room Details</title>
            </Helmet>
        </div>
    );
};

export default RoomDetails;