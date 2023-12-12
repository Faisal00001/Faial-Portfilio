
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer items-center  mt-28 p-4 py-10 bg-black text-neutral-content">
                <nav className="grid-flow-col gap-4 md:place-self-center justify-center">
                    <a target="_blank" href="https://www.facebook.com/faisal.osman.5245/" rel="noreferrer">
                        <FaFacebookF className="text-2xl cursor-pointer"></FaFacebookF>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/faisal-osman-41b203182/" rel="noreferrer">
                        <FaLinkedinIn className="text-2xl cursor-pointer"></FaLinkedinIn>
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;