import React, {useState,useEffect}from "react";
import { Link,useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
 /* const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);*/
  const prevLocation="qaswa"
  return (
    <div className="max-w-container mx-auto px-4 text-xl">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl">
          Welcome to {" "}
          <span className="text-primeColor font-semibold text-lg">
            QASWA FRUITS TRADERS,
          </span>{" "}
          Your Destination for Fresh and Flavorful Fruits!
          At QASWA FRUITS TRADERS, we're passionate about providing our customers with the freshest, highest-quality fruits available. With a commitment to excellence and a focus on customer satisfaction,
          we have established ourselves as a trusted name in the fruit industry.
          <br />
          we're passionate about bringing you the finest fruits straight from the orchards to your doorstep. With a commitment to quality and freshness, our brand stands out as your go-to destination for premium fruits.
        </h1>
        <br />
        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          OUR JOURNEY
        </span><br /><br />
          Qaswa Fruit Traders is a 3 years 10 months old Proprietorship Firm incorporated on 02-May-2020, having its registered office located at Shop No 8 Apmc, Market Yard, Mehrun, Jalgaon, Maharashtra.
          The major activity of Qaswa Fruit Traders is Trading For Availing Benefits Of Priority Sector Lending Psl Only , Sub-classified into Wholesale trade except of motor vehicles and motorcycles and is primarily engaged in the Wholesale of fruits vegetables.
          Qaswa Fruit Traders is classified as Micro enterprise in the financial year 2021-22. It has its unit situated at Jalgaon, Maharashtra.
        </h1>
        <br />
        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          OUR PROMISE
        </span><br /><br />
          When you choose QASWA FRUIT TRADERS, you can trust that you're getting the best fruits nature has to offer. Whether you're a health-conscious individual, a culinary enthusiast, or a business looking for premium fruit supply, we're here to exceed your expectations.
        </h1>
        <br />

        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          OUR VISION
        </span><br /><br />
        At QASWA FRUIT TRADERS, our vision is to become the leading provider of premium quality fruits, renowned for our commitment to freshness, sustainability, and customer satisfaction. We aspire to be a trusted name in the industry, delivering nature's goodness directly to our customers' tables, while making a positive impact on the environment and communities we serve.
        </h1>
        <br />

        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          OUR MISSION
        </span><br /><br />
        Our mission at QASWA FRUIT TRADERS is to source the freshest and finest fruits from reputable growers worldwide, ensuring that every product meets our stringent quality standards. We are dedicated to promoting healthy living by offering a diverse range of nutritious fruits and educating our customers about the benefits of incorporating fruits into their daily diet. Through ethical sourcing practices, sustainable operations, and exceptional customer service, we aim to delight our customers with every bite and contribute to a healthier, happier world.
        </h1>
        <br />


        <p className="text-base w-full xl:w-[80%]">
        Join us in celebrating the goodness of fresh fruits and elevate your lifestyle with QASWA FRUITS TRADERS. Let's embark on a fruitful journey together!
        <br/>
        Lohara, Maharashtra
        </p>
        <p className="text-base w-full xl:w-[80%]">
          Contact num: 9921553875
        </p>
        <p className="text-base w-full xl:w-[80%]">
          Email Id: ronnyqft2001@gmail.com
        </p>

        <Link to="/shop">
          <button className="w-52 h-10 bg-sky-500 text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
