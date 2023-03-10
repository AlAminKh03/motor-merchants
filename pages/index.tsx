import Head from "next/head";
import Hero from "../Components/Home/Hero";
import Products from "../Components/Home/Products";
import { GetStaticProps } from "next";

export interface ProductProps {
  _id: string;
  name: string;
  price: number;
  description: string;
  minOrder: number;
  available: number;
  ImgUrl: string;
}
export interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <div className="mx-0 md:mx-[200px]">
      <Head>
        <title>Motor Merchants</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Products products={products} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  const data = await fetch("http://localhost:8000/products");
  const products = await data.json();
  return {
    props: { products },
  };
};
