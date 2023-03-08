import React from "react";
import { ProductProps } from ".";
import { GetStaticPaths, GetStaticProps } from "next";
import SingleProduct from "../Components/SingleProducts/SingleProduct";

interface SingleProductProps {
  product: ProductProps;
}

const productDetails = ({ product }: SingleProductProps) => {
  console.log(product);
  return (
    <div>
      <SingleProduct product={product} />
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
  console.log(id);
  const response = await fetch(`http://localhost:8000/products/${id?.id}`);
  const product = await response.json();
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of product IDs from your API
  const response = await fetch("http://localhost:8000/products");
  const products = await response.json();
  const paths = products.map((product: ProductProps) => ({
    params: { id: product._id },
  }));
  return { paths, fallback: false };
};
