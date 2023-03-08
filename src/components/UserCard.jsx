import { Link } from "react-router-dom";

export default function UserCard({ id, photo = "", name = "", email = "", phone = "" }) {
  return (
    <Link to={"/product/" + id} className="h-56 rounded-xl flex bg-white overflow-hidden items-center">
      <img src={photo ?? "https://picsum.photos/400/500"} className="object-cover w-1/2 h-full" />
      <div className="pl-4">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="opacity-50 text-lg">{email}</div>
        <div className="opacity-50 text-lg">{phone}</div>
      </div>
    </Link>
  );
}
