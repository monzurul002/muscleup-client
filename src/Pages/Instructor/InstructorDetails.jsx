
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../../assets/personalBackground.png"
import { FaArrowTrendUp, FaArrowTurnDown, FaPlay } from "react-icons/fa6"; import { IoCallSharp } from "react-icons/io5";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";


const InstructorDetails = () => {
    const { id } = useParams();
    const [instructor, setInstructor] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/instructor/${id}`)
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])


    console.log(instructor);
    return (
        <div className="pt-16 md:pt-[68px] w-full ">
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }} >
                <div className="flex px-5 justify-evenly items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-stone-700	 ">{instructor?.instructorName}</h2>
                        <h3 className="text-xl font-bold text-slate-600">{instructor?.designation}</h3>
                        <div className="mt-6">
                            <button className=" btn bg-blue-600 hover:bg-blue-800 text-white"><FaPlay className="inline text-white text-xl" />
                                Watch Video</button>
                            <p className="font-bold text-sm py-2 md:text-2xl inline-block ml-3"> <IoCallSharp className="inline text-xl md:text-2xl mr-2 " />
                                Contact Now</p>
                        </div>
                    </div>
                    <div>
                        <img src={instructor?.image} alt="" />
                    </div>
                </div>

            </div>

            {/* details section */}
            <div className="grid grid-cols-1 md:grid-cols-9 p-8 px-5 md:px-24">
                <div className="col-span-6 px-4">
                    <h2 className="font-bold text-3xl">{instructor?.instructorName}</h2>
                    <p className="pt-4 text-slate-600">{instructor?.description}</p>
                </div>
                <div className="col-span-3 px-3">
                    <div className="flex justify-between py-3 ">
                        <h3 className="text-xl font-bold">Total Course  </h3>
                        <p className="font-bold">10</p>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>Ratings:</p> <p>{instructor?.rating}</p>
                    </div>
                    <h2 className="font-bold pt-5 text-xl text-blue-600">Follow me <FaArrowTurnDown className="inline" />
                    </h2>
                    <div className="flex gap-2 font-bold text-2xl py-3">
                        <TiSocialFacebook className="text-blue-500" />
                        <TiSocialYoutube className="text-red-500" />
                        <FaXTwitter />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default InstructorDetails;