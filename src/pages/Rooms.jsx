import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [rooms, setRoom] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRoom(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Hotel Rooms</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <div key={room._id} className="card bg-base-100 w-96 shadow-xl">
                        <Link to={`/roomDetails/${room._id}`}><figure>
                            <img
                                src={room.room_image}
                                alt="empty" className='w-[430px] h-[250px]' />
                        </figure></Link>

                        <div className="bg-[#F3F3F3]">
                            <h2 className="card-title m-4 mb-1">{room.room_type}</h2>
                            <p className='text-lg ml-4 mb-3'>Price per Night: <span className='text-green-600 font-semibold'>${room.price_per_night}</span></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Rooms;