import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Apple"
          price="130"
          pack="1kg"
          badge={true}
          des="Taste the Crispness! Indulge in Nature's Sweetest Apples for a Healthy Lifestyle."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Banana"
          price="100"
          pack="1kg"
          badge={false}
          des="Satisfy Your Cravings with Nature's Perfect Snack, Shop Fresh Bananas Today!"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Cherry"
          price="1000"
          pack="1kg"
          badge={true}
          des="From Pies to Parfaits, Cherries Add Flavor! Explore Our Premium Selections."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Pomogranate"
          price="150"
          pack="1kg"
          badge={false}
          des="Healthy and Delicious! Embrace the Goodness of Fresh Pomegranates for a Vibrant Life."
        />
      </div>
    </div>
  );
};

export default BestSellers;
