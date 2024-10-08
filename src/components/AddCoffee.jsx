import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5001/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-28">
            <h2 className="text-4xl font-extrabold">Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Row 1 */}
                <div className="flex gap-4">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 2 */}
                <div className="flex gap-4">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 3 */}
                <div className="flex gap-4">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 4 */}
                <div className="flex gap-4 mb-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default AddCoffee;