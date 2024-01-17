import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import SelectedClass from "./SelectedClass";

const MySelectedClass = () => {
    const { carts } = useCart();

    const total = carts.reduce((sum, curr) => {
        console.log(curr.price);
        return sum + parseInt(curr.price)
    }, 0)

    return (
        <div className="flex  md:flex-row">
            <div className="overflow-x-auto w-8/12 py-4 mx-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody >


                        {
                            carts.map((item, index) => <SelectedClass key={item._id} item={item} index={index}></SelectedClass>)
                        }


                    </tbody>


                </table>
            </div>
            <div className="w-2/3 md:w-4/12 py-6 md:py-16  ">
                <div className="bg-slate-200 w-11/12 p-4">
                    <div className="flex justify-between">
                        <h1 className="text-2xl">Total </h1>
                        <p className="text-3xl">${total}</p>
                        {/* <p className="text-3xl">${total?.toFixed(2)}</p> */}
                    </div>
                    <p>Shipping:$0 </p>
                    <Link to="/dashboard/checkout"> <button className="btn btn-primary w-full mt-8">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;