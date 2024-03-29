import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Todo from "./pages/Todo";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import NoPage from "./pages/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="todo" element={<Todo />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Hello
//
// function App() {
//   return (
//     <div>
//       <Header />
//       <section className="h-80 bg-red-800"></section>
//       <main className="bg-gray-300 h-96"></main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
