import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <h2>Update a coffee name is {name}</h2>
        </div>
    );
};

export default UpdateCoffee;