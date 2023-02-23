import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const fakeProducts = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.avatar(),
    };
  });

  const [products] = useState(fakeProducts);

  return (
    <div className="productContainer">
      {products.map((product) => {
        return <SingleProduct product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
