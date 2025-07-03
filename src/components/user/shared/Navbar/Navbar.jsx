import React, { useState } from 'react';
import './Navbar.css' ;
import fonts from '../../../config/fontsProvider';
import navImage from "../../../../assets/icons/navImage.jpg";
import menuImage from "../../../../assets/icons/white-menu.png";
import arrowImage from "../../../../assets/icons/nu-arrow.png";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from 'react-router';

const navlist = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/cart",
    name: "Cart",
  },
];



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleInProgress = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "in progress!",
      showConfirmButton: false,
      timer: 1500
    });
  }

    return (
      <nav className=" bg-gray-900 text-[#D6FB00] shadow-[#D6FB00] py-1 z-50 relative">
      {/* navlist for large and medium device >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className='lg:max-w-7xl md:max-w-3xl max-w-sm mx-auto'>
      <div className="lg:flex md:flex sm: hidden justify-between items-center  px-6 shadow-sm  relative z-50">
        {/* image section  */}
        <div>
          <img src={navImage} alt="navbar image" className="w-[90px]" />
        </div>
        {/* ul section  */}
        <ul style={{ fontFamily: fonts.nunito }} className=" flex gap-8 ">
          {navlist.map(({ path, name }, index) => (
            <Link key={index} href={path} className="relative group">
              <li onClick={handleInProgress} className=" uppercase font-extrabold text-sm relative">
                {name}
              </li>
              <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </ul>
        {/* join button  */}
        <button className="uppercase text-white font-extrabold text-sm flex items-center">
          <img src={arrowImage} alt="navbar image" className="w-[30px]" />
          <h1 onClick={handleInProgress} className="relative group">
            <span className="relative">Join</span>
            <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </h1>
        </button>
      </div>
      </div>
      {/* navlist for small device >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div className="md:hidden sm: block ">
        <div className="flex justify-between items-center mx-6 py-2">
          {/* image section  */}
          <div>
            <img src={navImage} alt="navbar image" className="w-[50px]" />
          </div>
          {/* menubar section  */}
          <div>
            <img
              onClick={handleMenu}
              src={menuImage}
              alt="navbar image"
              className="w-[30px] drop-shadow-lg"
            />
          </div>
        </div>
        {/* join button  */}
        <div className="flex justify-center bg-[#D6FB00] group hover:bg-black">
          <button className="uppercase font-extrabold text-sm flex items-center py-4 text-black group-hover:text-white">
            <TbArrowBadgeRightFilled size={25} />
            <h1 onClick={handleInProgress} className="relative group">
              <span className="relative text-lg">Join</span>
            </h1>
          </button>
        </div>
        {/* ul section  */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out shadow-sm shadow-[#D6FB00]  ${
            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul style={{ fontFamily: fonts.nunito }} className=" block text-center relative z-50 ">
            {navlist.map(({ path, name }, index) => (
              <Link key={index} href={path} className="relative group block">
                <li onClick={handleInProgress} className="uppercase font-extrabold text-sm relative leading-[50px] hover:bg-[#D6FB00] hover:text-black">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;