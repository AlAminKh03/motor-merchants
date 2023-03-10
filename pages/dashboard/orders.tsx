import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import NestedNav from "../../Components/PrivateRoute/NestedNav";

interface OrderProps {
  email: string;
  address: string;
  phoneNumber: string;
  price: number;
  quantity: number;
}
interface OrderProps2 {
  order: OrderProps[];
}

const orders = () => {
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:8000/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user?.email]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <NestedNav />
      <p>order</p>
    </div>
  );
};

export default orders;
