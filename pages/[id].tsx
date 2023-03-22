import React from "react";
import { ProductProps } from ".";
import { GetStaticPaths, GetStaticProps } from "next";
import SingleProduct from "../Components/SingleProducts/SingleProduct";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

interface SingleProductProps {
  product: ProductProps;
}

const productDetails = ({ product }: SingleProductProps) => {
  return (
    <div className="mx-0 md:mx-[200px] mt-20">
      <PrivateRoute>
        <SingleProduct product={product} />
      </PrivateRoute>
    </div>
  );
};

export default productDetails;

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: SingleProductProps;
}> => {
  const id = params;
  const response = await fetch(
    `https://motor-merchants-server.vercel.app/products/${id?.id}`
  );
  const product = await response.json();
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of product IDs from your API
  const response = await fetch(
    "https://motor-merchants-server.vercel.app/products"
  );
  const products = await response.json();
  const paths = products.map((product: ProductProps) => ({
    params: { id: product._id },
  }));
  return { paths, fallback: false };
};
