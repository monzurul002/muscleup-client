
const EmailSubscription = () => {
    return (
        <div className="w-full  bg-slate-200 p-5 ">
            <div className=" mx-auto w-full md:w-1/2">
                <img className="w-2/4 mx-auto" src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2020/06/taxi-4-768x768.png" alt="" />
                <div className="text-center">
                    <h3 className="text-xl md:text-3xl font-bold">Get tips directly into your inbox every Monday morning.</h3>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info  w-3/4 mt-6 mb-3" />
                    <button className="btn bg-slate-400 px-10">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscription;