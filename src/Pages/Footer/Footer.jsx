import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import logo from "../../assets/logo.png"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="  bg-neutral text-white">
            <div className="footer p-10 z-40">
                <aside>
                    <img className="w-2/4 pt-4" src={logo} alt="" />
                    <p>Muscleup Industries Ltd.<br />Providing reliable tech since 2020</p>
                </aside>

                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>



                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title text-sm">Follow Us</header>
                    <nav className=" flex gap-3 text-2xl ">
                        <TiSocialFacebook className="text-blue-500" />
                        <TiSocialYoutube className="text-red-500" />
                        <FaXTwitter />
                    </nav>
                </nav>

            </div>

            <div className="text-center mt-8 z-50 ">
                <p>Copyright © 2023 - All right reserved</p>

            </div>
            <div className="w-full mt-[-130px]   ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="#CCCCFF" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,250.7C384,224,480,160,576,160C672,160,768,224,864,250.7C960,277,1056,267,1152,245.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

        </footer>
    );
};

export default Footer;