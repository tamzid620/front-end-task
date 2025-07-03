import React from "react";
import errorLogo1 from "../../assets/images/error-page-logo.jpeg";
import fonts from "../config/fontsProvider";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-white flex justify-center items-center h-screen text-center">
      <div>
        <img src={errorLogo1} alt="error logo" className="w-[350px]" />
        <Link to="/">
          <button
            style={{ fontFamily: fonts.nunito }}
            className="border-4 border-[#d5fb00b8] text-[#d5fb00]
             hover:bg-[#d5fb00] hover:text-black
              uppercase text-sm  font-bold px-5 py-2 mt-5"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
