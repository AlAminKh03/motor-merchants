import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import star from "../../public/star.json";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Lottie from "lottie-react";

type Props = {};
interface ReviewProps {
  _id: string;
  name: string;
  rating: number;
  email: string;
  comment: string;
  imgUrl: string;
}

const Reviews = (props: Props) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  useEffect(() => {
    fetch("https://motor-merchants-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="inline-block text-yellow-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white mx-[45px] md:mx-[130px] py-20 text-center ">
      <h6 className="tracking-widest py-4">TESTIMONIALS</h6>
      <h1 className=" text-xl md:text-5xl font-bold pb-10 text-transparent  text-center  py-4 bg-clip-text bg-gradient-to-r from-indigo-700 to-red-500 uppercase">
        Our Customers
      </h1>
      <div className="flex items-center justify-center pb-6">
        <Lottie animationData={star} className=" w-20 md:w-48" />
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews?.map((review: ReviewProps) => {
          return (
            <SwiperSlide>
              <div className="contailer  flex flex-col items-start">
                <div className="my-6">
                  <div className="flex justify-start items-center gap-2 ">
                    {review?.imgUrl ? (
                      <div className=" ">
                        <Image
                          src={review.imgUrl}
                          alt="User photo"
                          width={20}
                          height={20}
                          className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rounded-full"
                        />
                      </div>
                    ) : (
                      <div>
                        <CgProfile className="lg:w-10 lg:h-10 w-5 h-5 " />
                      </div>
                    )}
                    <h1 className=" text-sm text-black ">{review.name}</h1>
                  </div>
                  <p className="  text-gray-900  text-xs">{review.email}</p>
                </div>
                <p className="text-sm font-light text-black text-start">
                  {review.comment}
                </p>
                <p className="flex items-center justify-cneter mt-1">
                  {" "}
                  {renderRatingStars(review.rating)}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
