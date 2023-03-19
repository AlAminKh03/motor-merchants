import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const FAQ = (props: Props) => {
  const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === accordionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(index);
    }
  };
  return (
    <div>
      <p className="text-3xl text-transparent  text-center font-bold py-8 bg-clip-text bg-gradient-to-r from-indigo-700 to-red-500 uppercase">
        Frequently Asked question
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <Image src="/FAQ.png" alt="FAQ photo" width={600} height={600} />
        </div>
        <div>
          <div
            className={`collapse collapse-arrow ${
              accordionIndex === 0 ? "open" : ""
            } `}
          >
            <input
              type="checkbox"
              checked={accordionIndex === 0}
              onChange={() => toggleAccordion(0)}
            />
            <div className="collapse-title text-lg font-bold text-black transition-all ease-in duration-500">
              What is Mobile Mechanics?
            </div>
            <div className="collapse-content text-black transition-all ease-in duration-500">
              <p>
                Mobile Mechanics is new innovation of Motor Merchants,
                <br /> That is the way to hire mechanics on your service under
                <br />
                our previlige or say so you will send expert over your house to
                get things done.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow ${
              accordionIndex === 1 ? "open" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={accordionIndex === 1}
              onChange={() => toggleAccordion(1)}
            />
            <div className="collapse-title text-lg font-bold text-black ">
              How to perticipate in the campaign??
            </div>
            <div className="collapse-content text-black">
              <p>
                To perticipate our new campaign you have to prebook the service.
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow ${
              accordionIndex === 2 ? "open" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={accordionIndex === 2}
              onChange={() => toggleAccordion(2)}
            />
            <div className="collapse-title text-lg font-bold text-black ">
              How to prebook the Mobile Mechanics?
            </div>
            <div className="collapse-content text-black">
              <p>
                You can prebook our service by calling our hotline
                <br /> or by our website. Fill your information in our contact
                form and send it right away
                <br />
                <Link href={"#contact"} className="underline text-yellow-600">
                  Contact form
                </Link>
              </p>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow ${
              accordionIndex === 4 ? "open" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={accordionIndex === 4}
              onChange={() => toggleAccordion(4)}
            />
            <div className="collapse-title text-lg font-bold text-black ">
              Cost of prebook?
            </div>
            <div className="collapse-content text-black">
              <p>
                Not a zero cent you can prebook this service at 0 cost
                <br /> By lottery we will select 10 lucky person to this service
                at 0 cost
                <br />
                <span className="text-indigo-600">
                  But there's deadline it's April 14, 2023. So hurry up!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
