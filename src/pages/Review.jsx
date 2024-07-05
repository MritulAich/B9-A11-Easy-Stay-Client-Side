import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Review = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(3);

    const handleFeedBack =()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tnx for your feedback",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="flex flex-col max-w-xl mt-10 p-4 shadow-xl rounded-xl items-center">
            <div className="flex flex-col ">
                <div title={user?.displayName} className="text-2xl font-semibold text-center">Review by {user?.displayName}</div>

                <div className="flex flex-col items-center py-6 space-y-3">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                </div>

                <div className="flex flex-col w-full">
                    <textarea rows="4" placeholder="comment..." className="p-4 rounded-md border resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                    <button onClick={handleFeedBack} className="btn btn-outline py-4 my-4 font-semibold rounded-md">Leave feedback</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Link rel="noopener noreferrer" to='/myBookings' className="text-sm dark:text-gray-600">Maybe later</Link>
            </div>
        </div>
    );
};

export default Review;