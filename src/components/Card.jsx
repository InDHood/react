import { Link } from "react-router-dom";

function Card({ id, imglink, title, price }) {
  return (
    <Link to={"/product/" + id} className="h-56 rounded-xl flex bg-white overflow-hidden items-center">
      <img src={imglink ?? "https://picsum.photos/400/500"} className="object-cover w-1/2 h-full" />
      <div className="pl-4">
        <h3 className="text-4xl font-semibold">{title || "Jo'burg"}</h3>
        <div className="opacity-50 text-xl">$ {price || "300"}</div>
      </div>
    </Link>
  );
}

export default Card;
