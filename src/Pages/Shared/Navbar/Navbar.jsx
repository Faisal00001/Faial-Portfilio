import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo/Logo.jpg";

const Navbar = () => {
    const showBar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    const hideSideBar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
    return (
        <div>
            <nav className="absolute z-10 w-full">
                <div className="container mx-auto">
                    <div className="flex justify-between   items-center">
                        <div className="pl-16 pb-5 mt-[50px] flex items-center">
                            <div className="avatar">
                                <div className="w-14 rounded-full">

                                    <img src={logo} />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl pl-3 text-slate-300 font-semibold">Faisal Osman</h3>
                        </div>
                        <div className="pb-5 mt-[50px]">
                            <ul className="sidebar hidden backdrop-blur-sm bg-white/30 fixed  top-0 right-0 min-h-screen z-50  shadow-xl flex-col  items-start justify-start w-full md:w-[400px] ">
                                <li className="w-full py-5">
                                    <div className="flex justify-end pr-5">
                                        <div>
                                            <IoMdClose onClick={hideSideBar} className="ml-5 text-3xl cursor-pointer" />
                                        </div>
                                    </div>
                                </li>
                                <li className="w-full pb-5">
                                    <Link to={'/'} className="pl-10 font-semibold">
                                        Home
                                    </Link>
                                </li>


                            </ul>
                            <ul className="flex items-center space-x-12 pr-16">
                                <li className="hidden lg:block">
                                    <Link to={'/'} className="text-slate-300  font-medium hover:text-black">
                                        Home
                                    </Link>
                                </li>




                                <li>
                                    <FiMenu onClick={showBar} className="text-3xl block lg:hidden cursor-pointer text-white font-medium " />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;