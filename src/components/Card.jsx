import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={"/product/" + props.id} className="h-56 rounded-xl flex bg-white overflow-hidden items-center">
      <img src={props.imglink ?? "https://picsum.photos/400/500"} className="object-cover w-1/2 h-full" />
      <div className="pl-4">
        <h3 className="text-4xl font-semibold">{props.title || "Jo'burg"}</h3>
        <div className="opacity-50 text-xl">$ {props.price || "300"}</div>
      </div>
    </Link>
  );
}

export default Card;
