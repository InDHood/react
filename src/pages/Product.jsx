import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Product() {
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

  let id = useParams().id;

  function p() {
    // find in array where id = params.id
    let filtered_array = products.filter((product) => product.id == id);
    // return first array object
    return filtered_array[0];
  }

  return (
    <>
      <section className="bg-red-800" style={{ backgroundImage: "url(" + p().imglink, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-4/5 mx-auto py-56 flex items-center">
          <div className="-mb-96 bg-gray-900 text-white bg-opacity-60 py-10 px-8">
            <h1 className="text-6xl ">$ {p().price}</h1>
            <h1 className="text-9xl ">{p().title}</h1>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 min-h-96">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-3 gap-12 py-12"></div>
        </div>
      </main>
    </>
  );
}

export default Product;
