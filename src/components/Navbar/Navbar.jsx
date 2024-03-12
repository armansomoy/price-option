import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];

  return (
    <div className="bg-slate-500">
        <div className=" md:hidden" onClick={()=> setOpen(!open)}>

            {
                open === true ? 
                <IoClose  className="text-2xl"/> 
                : <RiMenu2Line className="text-2xl"/>
            }

        
        </div>
      <ul className={`md:flex py-5 absolute md:static bg-slate-500 w-full text-center duration-1000 ${open ? 'top-50': '-top-80'}`}>
        {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </div>
  );
};

export default Navbar;
