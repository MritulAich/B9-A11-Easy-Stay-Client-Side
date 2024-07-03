import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
    const room = useLoaderData();
    // const { id } = useParams();
    // const idInt = parseInt(id);
    // const room = rooms.find(e => e.id === idInt);

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
                
                <button className="btn btn-warning text-lg">Book Now</button> <span className="text-xl mr-2 ml-4">For</span><span className='text-2xl text-green-700 underline font-semibold mb-1'>${room.price_per_night}</span>
            </div>
            <Helmet>
                <title>Room Details</title>
            </Helmet>
        </div>
    );
};

export default RoomDetails;