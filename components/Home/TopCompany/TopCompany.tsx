"use client"

import SectionHeading from "../../Helper/SectionHeading";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopCompanyCard from "./TopCompanyCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CompanyData = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "Udemy",
    Location: "london, UK",
    position: "20",
  },
  {
    id: 1,
    image: "/images/c1.png",
    name: "Udemy",
    Location: "london, UK",
    position: "20",
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Stripe",
    Location: "kolkota, India",
    position: "30",
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Dropbox",
    Location: "lahare, Pakistam",
    position: "33",
  },
  {
    id: 4,
    image: "/images/c4.png",
    name: "Figma",
    Location: "london, UK",
    position: "40",
  },
];

const TopCompany = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Top Company Registered"
        subHeading="Some of the companies we've helped recruit excellent applicants over the years"
      />
      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {CompanyData.map((data)=>{
            return <TopCompanyCard data={data} key={data.id}/>
          })}
        </Carousel>
        
      </div>
    </div>
  )
}

export default TopCompany;
