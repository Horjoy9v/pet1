"use client";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-slate-700 py-6 px-8 shadow-lg z-10">
      <div className="container mx-auto">
        <h1
          className="text-xl font-semibold hover:cursor-pointer"
          onClick={handleClick}
        >
          Магазин техніки
        </h1>
      </div>
    </header>
  );
};

export default Header;
