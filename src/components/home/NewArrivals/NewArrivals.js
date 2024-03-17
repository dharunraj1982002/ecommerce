import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Apricot"
            price="999"
            pack="2pack (each 1kg)"
            badge={true}
            des="Ripe for the Picking! Discover the Sweetest Selection of Fruits at Unbeatable Prices."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Avacado"
            price="800"
            pack="2pack (each 1kg)"
            badge={true}
            des="Guac On! Elevate Your Meals with Perfectly Ripened Avocados from Our Orchard"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Blueberry"
            price="2000"
            pack="2pack (each 1kg)"
            badge={true}
            des="Berrylicious Bliss Awaits! Dive into Freshness with Our Plump Blueberries Collection"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Olive"
            price="1500"
            pack="1pack (each 1kg)"
            badge={false}
            des="Rich, Tangy, and Delicious! Add a Touch of Olive Goodness to Your Meals."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Avacado"
            price="800"
            pack="2pack (each 1kg)"
            badge={false}
            des="Guac On! Elevate Your Meals with Perfectly Ripened Avocados from Our Orchard"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
