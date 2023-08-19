import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I am consistently amazed by the exceptional work that  delivers. Their attention to detail, creativity, and dedication shine through in every project. I can always rely on them to exceed my expectations and deliver results that truly stand out.",
    },
    {
      img: profilePic2,
      review:
      " Consistently goes above and beyond to provide exceptional work. Their expertise and professionalism are evident in every interaction and project. I'm grateful to have found someone who consistently delivers outstanding results.",
    },
    {
      img: profilePic3,
      review:
      "I have worked with multiple projects, and each time, they have delivered nothing short of exceptional work. Their ability to understand our needs and translate them into creative and effective solutions is truly impressive. I highly recommend [Your Name] for anyone seeking top-notch quality.",
    },
    {
      img: profilePic4,
      review:
      "I can't say enough good things . Their consistent delivery of exceptional work has made a significant impact on our projects. Their dedication, expertise, and willingness to go the extra mile truly set them apart.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me...</span>
        <div
          className=" blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className=" blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
