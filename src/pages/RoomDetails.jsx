import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetails = () => {
    const room = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBookNow=()=>{
        if(user)
            {return console.log('hi');}
        else{
            navigate('/login')
        }
    }

    const handleConfirm =()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You've booked this room",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="bg-base-200 flex flex-col  gap-10 p-6">
            <div>
                <img className="rounded-xl lg:w-[750px] lg:h-[500px]" src={room.room_image} />
            </div>
            <div className="p-3">
                <h2 className="text-lg">Category :<span className="text-2xl font-semibold m-2 mt-0">{room.room_type}</span></h2>
                <p>Size : <span className="text-xl">{room.size}</span></p>
                <p>Availability : <span className="text-xl font-semibold">{room.availability}</span></p>
                <p className="text-lg my-5">{room.description}</p>
                <p className="font-medium my-4 text-lg">Offers & deals : {room.special_offers}</p>

                
                <button className="btn btn-warning text-lg" onClick={() => {handleBookNow(); document.getElementById('my_modal_2').showModal()}}>Book Now</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-semibold text-lg">Room Summary</h3>
                        <p className="py-2 font-medium">Cost: ${room.price_per_night}</p>
                        <p className="">{room.description}</p>
                        <button onClick={handleConfirm} className="btn btn-outline btn-success mt-6 ml-44">Confirm</button>
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