import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import UserCard from "../components/UserCard";

export default function Blog() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);

  let baseUrl = import.meta.env.VITE_API;

  let getUsers = async () => {
    if (users.length) return;
    // fetch(baseUrl + "users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("THE DATA", data);
    //     data.length ? setUsers(data) : "";
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    let data = await fetch(baseUrl + "users");
    data = await data.json();
    setUsers(data);
  };

  // getUser()

  let getProducts = async () => {
    let data = await fetch(baseUrl + "products");
    data = await data.json();
    setProducts(data);
  };

  let getPosts = async () => {
    if (!users.length) return;
    let data = await fetch(baseUrl + "posts");
    data = await data.json();
    data = data.map((d) => ({
      ...d,
      user: users.filter((user) => user.id == d.author)[0],
    }));
    setPosts(data);
  };

  useEffect(() => {
    getUsers();
    getProducts();
    getPosts();
  }, [users]);

  return (
    <>
      <section className="bg-rose-800">
        <div className="w-4/5 mx-auto h-80 flex items-center">
          <h1 className="text-9xl text-white ">Blog</h1>
        </div>
      </section>
      <main className="bg-gray-300 min-h-96">
        <div className="mx-auto w-4/5 py-6">
          <a onClick={() => getUsers()}>Get Users</a>
        </div>

        <pre className="text-xs">{JSON.stringify(posts, undefined, 2)}</pre>

        <div className="mx-auto w-4/5 my-6">
          <div className="grid grid-cols-2 gap-12 py-12">
            {users?.map((user) => (
              <UserCard key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} photo={user.photo} />
            ))}
          </div>
        </div>

        <div className="mx-auto w-4/5 my-6">
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
