import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
    return ( 
        <div className="bg-[#262626]">
            <div className="container w-full flex justify-between mx-auto py-4 flex-wrap items-center md:items-start">
                <div className="w-full md:w-1/3 h-full">
                    <p className="text-purple-500 text-center">Designed and Developed by Pedro Certo</p>
                </div>
                <div className="w-full md:w-1/3 h-full">
                    <p class="text-center text-purple-500">Copyright © 2024 Pc.</p>
                </div>
                <div className="w-full md:w-1/3 text-right h-full flex justify-center items-center gap-3">
                    <Link to="https://github.com/pedroamcerto" target="_blank" className="text-white text-center text-xl">
                        <FaGithub />    
                    </Link>
                    <Link to="https://linkedin.com/in/pedro-certo" target="_blank" className="text-white text-center text-xl">
                        <FaLinkedin />    
                    </Link>
                </div>

            </div>
        </div>
     );
}

export default Footer;