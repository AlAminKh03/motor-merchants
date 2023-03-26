import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsChatLeft } from "react-icons/bs";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

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
        if (rating <= 1) {
          stars.push(<FaStar key={i} className="inline-block text-red-900" />);
        } else if (rating === 2) {
          stars.push(<FaStar key={i} className="inline-block text-red-500" />);
        } else if (rating === 3) {
          stars.push(
            <FaStar key={i} className="inline-block text-green-500" />
          );
        } else if (rating === 4) {
          stars.push(
            <FaStar key={i} className="inline-block text-indigo-500" />
          );
        } else {
          stars.push(
            <FaStar key={i} className="inline-block text-indigo-900" />
          );
        }
      } else {
        stars.push(<FaStar key={i} className="inline-block text-gray-300" />);
      }
    }
    return stars;
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="p-20">
      <p className="text-3xl text-transparent  text-center font-bold py-4 bg-clip-text bg-gradient-to-r from-indigo-700 to-red-500 uppercase font-[VT323] ">
        {" "}
        What Our Clients Say
      </p>

      <Slider {...settings} className="mr-0 ml-0 lg:ml-20 pb-4 ">
        {reviews?.map((review: ReviewProps) => {
          return (
            <div key={review._id} className="ml-0 lg:ml-36">
              <div className="relative my-5">
                <Image
                  src={"/chat-4.png"}
                  alt="review image"
                  width={350}
                  height={300}
                  className="w-[400px] h-[400px]"
                />
                <div className="absolute  top-[20%] left-[5%] px-6 lg:px-0 w-[260px]  lg:w-[300px]">
                  <p className="text-base lg:text-lg  font-bold  text-black p-2 leading-[12px] font-[VT323] ">
                    <span className="lg:text-2xl text-base ">&rsquo;</span>{" "}
                    {review.comment}
                  </p>

                  <div className="flex items-end justify-center  text-xs lg:text-base">
                    {renderRatingStars(review.rating)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start -mt-10">
                <div className="flex justify-center items-center gap-2 ">
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

                  <div className="flex flex-col justify-center ">
                    <p className="text-black font-bold text-sm lg:text-lg lg:font-[VT323]">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">{review.email}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
