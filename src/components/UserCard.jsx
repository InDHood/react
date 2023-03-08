import { Link } from "react-router-dom";

export default function UserCard({ id, photo = "", name = "", email = "", phone = "" }) {
  return (
    <Link to={"/product/" + id} className="h-36 rounded-xl flex bg-white overflow-hidden items-center">
      <img src={photo} className="object-cover w-1/2 h-full" />
      <div className="pl-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="opacity-50">{email}</div>
        <div className="opacity-50">{phone}</div>
      </div>
    </Link>
  );
}
