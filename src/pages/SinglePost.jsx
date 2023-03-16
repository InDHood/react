import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    
    let baseUrl = import.meta.env.VITE_API;
  
    // getUser()
  
    let getUsers = async () => {
      if (users.length) return;
      
      let data = await fetch(baseUrl + "users");
      data = await data.json();
      setUsers(data);
    };
  
    // getPosts()
  
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
      getPosts();
    }, [users]);
  
  let { id } = useParams();

  const pt = posts.filter((post) => post.id == id)[0];


  return (
    <>
      <section className="bg-red-800" style={{ backgroundImage: "url(" + pt.image, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-4/5 mx-auto py-56 flex items-center">
          <div className="-mb-96 bg-gray-900 text-white bg-opacity-60 py-10 px-8">
            <h1 className="text-6xs ">{pt.date}</h1>
            <h1 className="text-9xl ">{pt.title}</h1>
          </div>
        </div>
      </section>
      <main className="bg-gray-900 min-h-96">
        <div className="mx-auto w-4/5 h-auto" >
          <div className="grid grid-cols-3 gap-12 py-12">{pt.content}</div>
        </div>
      </main>
    </>
  );
}
