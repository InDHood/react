import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  let products = [
    {
      id: 1,
      title: "NY City",
      price: 529.99,
      imglink: "https://picsum.photos/1420/510",
    },
    {
      id: 2,
      title: "Jo City",
      price: 145.49,
      imglink: "https://picsum.photos/1400/500",
    },
    {
      id: 3,
      title: "LA Ville",
      price: 200,
      imglink: "https://picsum.photos/1410/510",
    },
    {
      id: 4,
      title: "Lagos City",
      price: 129.99,
      imglink: "https://picsum.photos/1430/530",
    },
    {
      id: 5,
      title: "Hawaii City",
      price: 229.99,
      imglink: "https://picsum.photos/1440/540",
    },
    {
      id: 6,
      title: "Ijebu City",
      price: 125,
      imglink: "https://picsum.photos/450/500",
    },
    {
      id: 7,
      title: "Ikoyi City",
      price: 109.99,
      imglink: "https://picsum.photos/1460/520",
    },
    {
      id: 8,
      title: "Kenya City",
      price: 199.99,
      imglink: "https://picsum.photos/1400/500",
    },
    {
      id: 9,
      title: "Rwanda City",
      price: 129.99,
      imglink: "https://picsum.photos/1420/570",
    },
    {
      id: 10,
      title: "London City",
      price: 59.99,
      imglink: "https://picsum.photos/1415/515",
    },
  ];

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
