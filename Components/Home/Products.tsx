import React from "react";
import { ProductProps } from "../../pages";
import Image from "next/image";
import { BiCartAlt } from "react-icons/bi";
import Link from "next/link";

interface ProductsProps {
  products: ProductProps[];
}

function Products({ products }: ProductsProps) {
  return (
    <div className="my-6 md:my-12">
      <p className="text-transparent text-3xl   bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500  font-bold text-center mb-4">
        UNITS
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 ">
        {products.map((product) => {
          return (
            <div key={product._id}>
              <div className="card card-side border border-gray-100 shadow-lg rounded-md flex md:flex-row items-center justify-center p-4 gap-2 h-auto lg:h-[270px]">
                <div className="">
                  <Image
                    src={product.ImgUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="">
                  <h2 className="font-bold text-black">{product.name}</h2>
                  <p className="text-gray-500 text-sm ">{`${product.description
                    .split(" ")
                    .slice(0, 12)
                    .join(" ")}...`}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 pt-2">
                    <p className="">
                      {" "}
                      Available:{" "}
                      <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold rounded-xl p-1">
                        {product.available}
                      </span>
                    </p>
                    <p className="">
                      Min order:{" "}
                      <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold rounded-xl p-1">
                        {product.minOrder}
                      </span>
                    </p>
                  </div>
                  <p className="py-2">
                    {" "}
                    <span className="text-lg font-bold ">${product.price}</span>
                    / per unit
                  </p>

                  <div className="py-3 flex items-center justify-start gap-3 uppercase text-indigo-900 font-semibold bg-indigo-100 p-2 rounded-md hover:bg-indigo-200 mr-24 cursor-pointer">
                    <BiCartAlt className="w-4 h-4" />
                    <Link className="" href={`/${product._id}`}>
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
