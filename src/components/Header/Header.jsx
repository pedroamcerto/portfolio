import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "PROJECTS", link: "/projects" },
        { name: "CONTACT", link: "/contact" }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50 bg-[#262626]'>
            <div className='md:flex items-center justify-between py-4 px-7 md:container md:px-0 mx-auto'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 w-20 h-min'>
                    <h1 className='text-white'>Pc.</h1>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-5 top-5 cursor-pointer md:hidden w-7 h-7 text-white'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#262626] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link["name"]}>
                                <NavLink to={link.link} className={({ isActive }) =>
                                    `text-white hover:text-transparent transition duration-500 ease-in-out bg-clip-text hover: bg-purple-500` +
                                    (isActive ? 'bg-clip-text bg-purple-500' : '')}
                                >
                                    {link.name}
                                </NavLink>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;