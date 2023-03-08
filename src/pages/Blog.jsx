import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import UserCard from "../components/UserCard";

export default function Blog() {
  const [users, setUsers] = useState([]);

  let getUser = () => {
    let url = "http://cronusweb.com:8426/users";

    let users = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("THE DATA", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("HEY....");
  };

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
      <section className="bg-rose-800">
        <div className="w-4/5 mx-auto h-80 flex items-center">
          <h1 className="text-9xl text-white ">Blog</h1>
        </div>
      </section>
      <main className="bg-gray-300 min-h-96">
        <div className="mx-auto w-4/5 py-6">
          <a onClick={() => getUser()}>Get Users</a>
        </div>

        <div className="mx-auto w-4/5 my-12">
          <div className="grid grid-cols-2 gap-12 py-12">
            {users.map((user) => (
              <UserCard key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} photo={user.photo} />
            ))}
          </div>
        </div>

        <div className="mx-auto w-4/5 my-12">
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
