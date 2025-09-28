import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Pricing Packages"
        subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={0}
        >
          <PriceCard type="Basic" price="199" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={100}
        >
          <PriceCard type="Standard" price="299" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={200}
        >
          <PriceCard type="Extended" price="799" />
        </div>
      </div>
    </div>
  );
};

export default Price;
