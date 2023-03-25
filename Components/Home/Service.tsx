import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="flex relative  items-center lg:items-start lg:flex-row flex-col mt-20  pb-20 bg-white">
      <div className="z-10 static md:static lg:absolute pb-10">
        <Image src="/car.png" alt="Car pic" width={600} height={500} />
      </div>
      <div className="  mx-auto lg:ml-[20rem] w-[380px] h-[320px] md:w-[550px] md:h-[300px] bg-yellow-100 ">
        <div className="md:px-5 md:py-2 px-3 py-3 ">
          <p className="font-bold text-3xl text-black text-left">
            Not just selling the Parts
          </p>
          <p className="font-bold text-3xl text-black text-left left-20 pt-1">
            We <span className="bg-indigo-100 px-2 pb-1 rounded-md">Fix</span>{" "}
            too
          </p>
        </div>
        <div className="md:ml-48 p-2">
          <p className="text-sm text-gray-700">
            As you might already know that we also have repairing service if you
            are an old customer of our . Although it was our sub brand The great
            news is we are marging it, That means the repair services will be
            available all our retail Stores.
            <br />
            <span className="italic text-gray-800">
              &quot; With the marging news we are bringing the most innovatitive
              services of all time in the history ever{"  "}
              <br /> MOBILE MACHANICS &quot;{" "}
            </span>
          </p>
          <div className=" flex gap-4 justify-end items-center">
            <label
              htmlFor="my-modal-3"
              className="underline cursor-pointer text-gray-600"
            >
              More Info
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box relative bg-yellow-50">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  So what is this MOBILE MACHANICS !?
                </h3>
                <p className="py-4 text-black">
                  Well, your feedback is always appriciating, So when the
                  reparing thing was our sub-brand you guys complained and we
                  heared. And this is the result of feedback <br />
                  We never know what problem is going to happen in your
                  automobiles. It might be small, it might be Big . Previously
                  we would only provide some selective services for repairing.
                  Through the revolutionary MOBILE MACHANICS we can solve your
                  problem no matter how small it is, Because that&apos;s what
                  MOBILE MECHANICS means.
                </p>
                <p className="text-black">
                  We will hire mechanics according to your problem and give you
                  the best solution{" "}
                </p>
                <p className="italic bg-indigo-200 p-2 rounded-md text-black">
                  We&apos;ve an ongoing campaign for our new event , prebook the
                  service and lucky 10 person will get the FULL FREE installment
                  of their autmobiles
                </p>
                <button className="mt-2 bg-indigo-100 p-1 text-indigo-700 hover:bg-indigo-400 hover:text-white border-2 border-l-0 border-r-0 border-t-0 border-b-black rounded-md transition-all ease-in duration-300">
                  prebook
                </button>
              </div>
            </div>
            <button className="bg-indigo-100 p-1 text-indigo-700 hover:bg-indigo-400 hover:text-white border-2 border-l-0 border-r-0 border-t-0 border-b-black rounded-md transition-all ease-in duration-300">
              prebook
            </button>
          </div>
        </div>

        {/* <div className="border w-[200px] h-[200px] border-indigo-400">
          <p>
            Brake Repair Service": This is a specialized fixing service that
            focuses solely on repairing and maintaining brakes. They can
            diagnose and fix a variety of brake issues, including squeaking,
            grinding, or unresponsive brakes, and can also provide regular
            maintenance to keep your brakes in top shape.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
