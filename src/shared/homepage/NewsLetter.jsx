import Swal from "sweetalert2";

const NewsLetter = () => {
    const handleSubscribe = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You've successfully been subscribed",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="card bg-blue-800 text-primary-content w-96">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">Stay up-to-date with the latest updates</h2>
                <p>Subscribe to get the exclusive deals and offers regularly.</p>
                <div className="join">
                    <input
                        type="email" name="email"
                        placeholder="user@gmail.com"
                        className="input input-bordered join-item text-black" />
                    <button onClick={handleSubscribe} className="btn btn-secondary join-item">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;