import React from "react";
import Price from "../Price/Price";

const PriceOption = () => {
  const priceOptions = [
    {
      id: 1,
      packageName: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Limited group classes",
        "No personal trainer sessions included",
        "Locker access",
      ],
    },
    {
      id: 2,
      packageName: "Standard Membership",
      price: 49.99,
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "2 personal trainer sessions per month",
        "Locker access",
        "Towel service",
      ],
    },
    {
      id: 3,
      packageName: "Premium Membership",
      price: 79.99,
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "4 personal trainer sessions per month",
        "Access to sauna and spa",
        "Locker access",
        "Towel service",
        "Nutrition consultation",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-6xl font-semibold"> Checkout Our Packages</h2>
      <div className="grid grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <Price key={option.id} option={option}></Price>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
