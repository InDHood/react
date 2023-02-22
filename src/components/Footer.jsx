import logo_white from "../assets/CHX_white.svg";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-4/5  h-60 flex items-end">
        <img src={logo_white} className="h-40 opacity-20" alt="" />
        <div className="text-white text-right flex-grow pb-6">copyright (c) 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
