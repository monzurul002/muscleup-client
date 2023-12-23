import { ScaleLoader } from "react-spinners";
import logo from "../../assets/logo.png"
const Loading = () => {
    return (
        <div className="w-full h-screen	 flex flex-col justify-center items-center bg-violet-950">
            <ScaleLoader color="#36d7b7"  > </ScaleLoader>
            <img width="200px" className="animate-bounce mt-3" src={logo} alt="" />
        </div>
    );
};

export default Loading;