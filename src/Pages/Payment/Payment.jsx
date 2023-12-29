import useCart from "../../hooks/useCart";

const Payment = () => {
    const { carts } = useCart();
    const total = carts.reduce((sum, curr) => {
        return sum + curr.price
    }, 0)
    return (
        <div className="p-8">
            <h1 className="text-3xl text-indigo-700 font-bold">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <h2 className="py-2 text-xl">Billing Adress</h2>
                    <select className="select select-success w-full py-2 max-w-xs">
                        <option disabled selected>Country</option>
                        <option>Afganistan</option>
                        <option>Aramania</option>
                        <option>Bangladesh</option>
                        <option> Canada</option>
                        <option>Pakistan</option>
                        <option> Nepal</option>
                        <option>Soudi Arabia</option>
                    </select>
                    <div className="py-3">
                        <h3 className="text-2xl">Payment Method</h3>
                    </div>
                </div>
                <div className="">
                    <div className="bg-slate-200  w-11/12 p-6 rounded-lg">
                        <h2 className="text-2xl ml-2">Summary</h2>
                        <div className=" p-2">
                            <div className="flex justify-between">
                                <h1 className="text-2xl">Total </h1>
                                {/* <p className="text-3xl">${total.toFixed(2)}</p> */}
                                <p className="text-3xl">${parseInt(total)}</p>
                            </div>
                            <p>Shipping:$0 </p>
                            <button className="btn btn-primary w-full mt-8">Complete Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;