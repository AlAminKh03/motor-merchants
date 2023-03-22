import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { FaCcMastercard, FaCcStripe, FaCcVisa } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="">
      <footer className="footer py-10 px-10 lg:px-[200px] bg-gray-100 text-gray-900 hidden lg:flex lg:gap-64 justify-center">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
          <div
            className="tooltip"
            data-tip="I have provided my fb and twitter also github account please dm me if you have any queries."
          >
            <a className="link link-hover">Contact</a>
          </div>
          <div
            className="tooltip"
            data-tip="We ain't currently hiring but we will very soon, so stay with us."
          >
            <a className="link link-hover">Job</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Payment Through:</span>
          <div className="flex gap-3">
            <FaCcStripe className="w-6 h-6" />
            <FaCcVisa className="w-6 h-6" />
            <FaCcMastercard className="w-6 h-6" />
          </div>
        </div>
      </footer>
      <footer className="footer px-10 lg:px-[280px] py-4 border-t bg-gray-200 text-gray-900 border-base-300">
        <div className="items-center grid-flow-col">
          <Image src="/favicon.ico" alt="footer image" width={60} height={60} />
          <p className="text-black font-bold">
            Motor Merchants <br />
            <span className="text-gray-600">
              {" "}
              Providing reliable tech since 2001
            </span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href={"https://www.facebook.com/profile.php?id=100008742093722"}
              target="_blank"
            >
              <BsFacebook className="w-4 h-4 hover:text-blue-600" />
            </Link>
            <Link href={"https://github.com/AlAminKh03"} target="_blank">
              <BsGithub className="w-4 h-4 hover:text-black text-gray-800" />
            </Link>
            <Link href={"https://twitter.com/AlAminKhan6203"} target="_blank">
              <BsTwitter className="w-4 h-4 hover:text-blue-600" />
            </Link>
          </div>
          <p className="flex items-center">
            {" "}
            All right reserved 2023 &#169;Al Amin Khan
            <AiFillHeart className="text-red-500" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
