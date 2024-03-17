import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">At Qaswa Fruits Traders, </span>{" "}
          we're passionate about bringing you the finest fruits straight from the orchards to your doorstep. With a commitment to quality and freshness, our brand stands out as your go-to destination for premium fruits.
        </h1>
        <p className="text-base w-full xl:w-[80%]">
              Lohara, Maharashtra
            </p>
            <p className="text-base w-full xl:w-[80%]">
              Contact num: 9921553875 
            </p>
            <p className="text-base w-full xl:w-[80%]">
              Email Id: ronnyqft2001@gmail.com 
            </p>

        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
