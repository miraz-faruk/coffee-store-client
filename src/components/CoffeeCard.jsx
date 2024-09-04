import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`http://localhost:5001/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
        console.log(_id);
    }

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full mx-10 border">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-700 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;