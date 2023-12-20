import useCart from "../../hooks/useCart";
import SelectedClass from "./SelectedClass";

const MySelectedClass = () => {
    const { carts } = useCart()
    return (
        <div className="flex">
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
            <div className="w-4/12 py-16  ">
                <div className="bg-slate-200 w-11/12 p-4">
                    <div className="flex justify-between"><h1 className="text-2xl">Total </h1>
                        <p className="text-3xl">$300</p>
                    </div>
                    <p>Shipping:$0 </p>
                    <button className="btn btn-primary w-full mt-8">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;