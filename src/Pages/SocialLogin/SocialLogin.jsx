import { FcGoogle } from "react-icons/fc";
import "./SocailLogin.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    return (

        <button onClick={googleSignIn} id="googleSignIn" className="btn  bg-white mx-8 mb-3">
            <FcGoogle className="text-2xl"></FcGoogle> Google SignIn
        </button>
    );
};

export default SocialLogin;