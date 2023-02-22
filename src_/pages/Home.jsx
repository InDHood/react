import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-red-800">
        <div className="w-4/5 mx-auto h-80 flex items-center">
          <h1 className="text-9xl text-white ">Home</h1>
        </div>
      </section>
      <main className="bg-gray-300 h-96">
        <div class="mx-auto w-4/5">
          <Link to="/anything">Anything...</Link>
        </div>
      </main>
    </>
  );
}

export default Home;
