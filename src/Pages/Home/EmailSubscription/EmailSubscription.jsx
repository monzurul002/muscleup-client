
const EmailSubscription = () => {
    return (
        <div className="w-full bg-slate-200 ">
            <div className=" mx-auto w-1/2">
                <img className="w-2/3 mx-auto" src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2020/06/taxi-4-768x768.png" alt="" />
                <h3 className="text-2xl md:text-5xl font-bold">Get my tips directly into your inbox every Monday morning.</h3>
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-3/4 my-8" /> <button className="btn bg-slate-400">Subscribe</button>
            </div>
        </div>
    );
};

export default EmailSubscription;