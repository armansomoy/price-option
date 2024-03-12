import React from "react";
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const Price = ({ option }) => {
  const { packageName, price, features } = option;
  return (
    <div className="bg-slate-700 m-2 py-5 px-3 text-center rounded">
      <h2 className="mb-4">
        <span className="text-6xl">{price}</span>
        <span className="text-2xl">/Mon</span>
      </h2>
      <h4 className="text-3xl font-bold">{packageName}</h4>
      {
        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
      }
      <button className="py-3 my-4 w-full bg-slate-400 text-black"> Buy Now</button>
    </div>
  );
};

export default Price;
