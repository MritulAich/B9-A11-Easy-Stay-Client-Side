import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        if (password.length < 6) {
            alert('Password must contain minimum 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            alert('Password must contain at least one uppercase letter')
        }
        else if (!/[a-z]/.test(password)) {
            alert('Password must contain at least one lowercase letter');
        }
        else (toast('You have registered successfully'));


        createUser(email, password)
            .then(res => { console.log(res.user) })
            .catch(err => { console.log(err) })
    }


    return (
        <div className="flex flex-col justify-center items-center my-8">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Registration</h2>

                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="user name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    </div>
                    <button className="w-full px-8 py-3 mb-4 font-semibold rounded-md bg-blue-600 text-gray-50">Sign up</button>
                </form>
                    <h2>Have an account? Go to <Link to='/login' className="font-bold">Login</Link></h2>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;