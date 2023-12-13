
const Instructor = () => {
    return (
        <div style={{ backgroundColor: "#060e0e" }} className=" mx-auto pt-28 	 grid grid-cols-1 md:grid-cols-2">
            <div className="card card-side bg-gradient-to-r from-cyan-200 from-10% via-cyan-300 via-30% to-rose-200	 to-90% shadow-xl rounded-lg">
                <div className="w-50">
                    <figure><img className="w-50 " src="" alt="Movie" /></figure>
                </div>
                <div className="card-body w-50">
                    <h2 className="card-title">Danel Hand</h2>
                    <p>danerl@yahoo.com</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Instructor;