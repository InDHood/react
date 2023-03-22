import { Link } from "react-router-dom";

export default function BlogPost({ data = {} }) {
  let { id, user, title, date, image } = data;
  return (
    <Link to={"/singlepost/" + id} className="h-36 rounded-xl flex bg-white overflow-hidden items-center">
      <img src={image} className="object-cover w-1/2 h-full" />
      <div className="pl-4">
        <h1 className="text-xs font-semibold">{title}</h1>
        <div className="opacity-50">{date}</div>
        <div className="text-xs opacity-50">{user.name}</div>
        <img src={user.photo} className="object-cover w-1/2 h-full" />
      </div>
    </Link>
  );
}
