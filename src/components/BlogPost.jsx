import { Link } from "react-router-dom";

export default function BlogPost({ data = {} }) {
  let { id, user, title, date, image, content } = data;
  return (
    <div className=" h-auto rounded-xl bg-white  items-center">
      <div className="bg-red-800 h-40" style={{ backgroundImage: "url(" + image, backgroundSize: "cover", backgroundPosition: "center" }}>
      <img src={user.photo} className="object-cover w-10 h-10" style={{ position: "relative", top: "130px", left: "20px",  borderRadius: "50%"}} />
      </div>
      <div className="pl-4 pt-4">
      <div className="text-xs opacity-50">{date}</div>
        <h1 className="text-xs font-bold">{title}</h1>
        <div className="text-xs font-semibold opacity-70">by {user.name}</div>
        <div className="text-xs opacity-50">{content}</div>
        <Link to={"/singlepost/" + id} className="text-xs opacity-50">READ MORE...</Link>
      </div>
    </div>
  );
}
