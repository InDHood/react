export default function TodoCard({ label, status, onClick }) {
  return (
    <div className="flex bg-white py-12 px-16 mt-8 rounded-xl items-center">
      <div className="h-8 w-8 rounded-full border-4 border-black cursor-pointer"  onClick={(e) => (onClick ? onClick(e) : "")}>{status == "DONE" && <div className="h-4 w-4 bg-black rounded-full m-1"></div>}</div>
      <div className="flex-grow text-4xl pl-8">{label}</div>
      <div className="opacity-30">{status}</div>
    </div>
  );
}
