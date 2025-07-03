import React, { useState } from "react";
import "./Navbar.css";
import fonts from "../../../config/fontsProvider";
import navImage from "../../../../assets/icons/navImage.jpg";
import menuImage from "../../../../assets/icons/white-menu.png";
import closeButtonImage from "../../../../assets/icons/nu-close.png";
import nuCartImage from "../../../../assets/icons/nu-cart.png";
import whiteCartImage from "../../../../assets/icons/white-cart.png";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router";
import ViewCart from "../ViewCart/ViewCart";

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
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleViewCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      {/* NAVBAR SECTION >>>>>>>>>>>>>>>>> */}
      <nav className=" bg-black text-[#D6FB00] border-b-2 border-[#D6FB00] py-3 z-10 relative">
        {/* navlist for large and medium device >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="lg:max-w-7xl md:max-w-3xl max-w-sm mx-auto">
          <div className="lg:flex md:flex sm: hidden justify-between items-center  px-6 shadow-sm  relative z-10">
            {/* image section  */}
            <div>
              <img src={navImage} alt="navbar image" className="w-[70px]" />
            </div>
            {/* ul section  */}
            <ul style={{ fontFamily: fonts.nunito }} className=" flex gap-8 ">
              {navlist.map(({ path, name }, index) => (
                <Link key={index} href={path} className="relative group">
                  <li className=" uppercase font-extrabold text-sm relative">
                    {name}
                  </li>
                  <hr className="navHrPolygen absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </ul>
            {/* join button  */}
            <button
              onClick={handleViewCart}
              className="uppercase text-white font-extrabold text-sm flex items-center"
            >
              <img
                src={nuCartImage}
                alt="navbar image"
                className="w-[30px] me-1"
              />
              <h1 className="relative group">
                <span className="relative">Cart</span>
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
            <div className="flex items-center gap-3">
              <img
                onClick={handleViewCart}
                src={whiteCartImage}
                alt="navbar image"
                className="w-[30px] drop-shadow-lg"
              />
              <img
                onClick={handleMenu}
                src={menuImage}
                alt="navbar image"
                className="w-[30px] drop-shadow-lg"
              />
            </div>
          </div>
          {/* ul section  */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out shadow-sm   ${
              isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul
              style={{ fontFamily: fonts.nunito }}
              className=" block text-center relative z-10 "
            >
              {navlist.map(({ path, name }, index) => (
                <Link key={index} href={path} className="relative group block">
                  <li className="uppercase font-extrabold text-sm relative leading-[50px] hover:bg-[#D6FB00] hover:text-black">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* SIDEBAR SECTION >>>>>>>>>>>>>>>> */}
      {isCartOpen ? (
        <div className="fixed top-0 w-[380px] bg-gray-800 h-screen z-20">
          <div className="relative">
            <div className=" flex justify-end">
              <img
                onClick={handleViewCart}
                src={closeButtonImage}
                alt="close button"
                className="w-8 m-4 "
              />
            </div>
            {/* cart section  */}
            <ViewCart />
          </div>
          {/* checkout button  */}
          <div className="">
            <button
              className="absolute bottom-5 w-[360px] ms-2 bg-[#D6FB00] hover:bg-[#88ff76] py-2 text-black font-bold text-center uppercase"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
