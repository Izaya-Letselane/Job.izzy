"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import SectionHeading from "../../Helper/SectionHeading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Testimonials From Customers"
        subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <ReviewCard images="/images/u1.png" title="Great Quality" username="Jessica Doe" userRole="App Developer"/>
          <ReviewCard images="/images/u2.png" title="Awesome work!" username="Jason Doe" userRole="Web Developer"/>
          <ReviewCard images="/images/u3.png" title="Best work" username="Jessica Doe" userRole="AI Developer"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
