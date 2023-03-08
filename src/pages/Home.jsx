import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useState([]);

  let getProducts = async () => {
    let products = await fetch(import.meta.env.VITE_API + "products");
    products = await products.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="bg-red-800">
        <div className="w-4/5 mx-auto h-80 flex items-center">
          <h1 className="text-9xl text-white ">Home</h1>
        </div>
      </section>
      <main className="bg-gray-300 min-h-96">
        <div className="mx-auto w-4/5">
          <Link to="/anything">Anything...</Link>
        </div>

        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-3 gap-12 py-12">
            {products.map((product) => (
              <Card key={product.id} id={product.id} title={product.title} price={product.price} imglink={product.imglink} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
