import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "../../../Components/Payment/CheckOut";
import Image from "next/image";

const stripePromise = loadStripe(
  "pk_test_51MWAjzJ7hs3mHdQrWKZY7V1DoLVxQ05DtW9fIAQD267DTekGdqsUQrDQkRbMPCA3Q7f8ZljNyyt1UxZhkfTbtfWJ00WXSwPJZN"
);
export interface ProductInformationProps {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  price: number;
  paid: boolean;
}

const Id = () => {
  const [productInfromation, setProductInformation] =
    useState<ProductInformationProps>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetch(`http://localhost:8000/orders/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductInformation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className=" relative top-12 ml-0 md:ml-10 pb-10 h-screen">
      <div className="flex flex-row-reverse  mx-auto justify-center items-center">
        <div className="relative w-[550px] h-[450px] hidden md:block">
          <Image src={"/card.png"} alt="Card img" fill className="grow " />
        </div>
        <div className=" px-10 py-6 z-[10] bg-gray-100 h-[420px] rounded-md   w-[400px]">
          <Elements stripe={stripePromise}>
            <p className=" bg-indigo-100 p-4  rounded-md border-b-4 border-black text-center text-lg text-indigo-700 uppercase">
              Payment Information
            </p>
            <p className="pt-1">
              Name :{" "}
              <span className="text-gray-500 text-sm">
                {productInfromation?.name}
              </span>
            </p>
            <p className="pt-1">
              Phone Number :{" "}
              <span className="text-gray-500 text-sm">
                {productInfromation?.phoneNumber}
              </span>
            </p>
            <p className="pt-1">
              Email :{" "}
              <span className="text-gray-500 text-sm">
                {productInfromation?.email}
              </span>
            </p>
            <p className="pt-1 pb-10">
              Pay :{" "}
              <span className="text-green-500 text-sm">
                ${productInfromation?.price}
              </span>
            </p>
            {productInfromation && (
              <CheckOut clientInformation={productInfromation} />
            )}
          </Elements>
        </div>
      </div>
    </div>
  );
};
export default Id;
