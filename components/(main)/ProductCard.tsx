import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  src: string;
  alt: string;
  name: string;
  price: string; // Тип змінено на string
}

const ProductCard: React.FC<ProductCardProps> = ({ src, alt, name, price }) => {
  // Перетворення строки ціни на число
  const numericPrice = parseFloat(price);

  // Форматування числової ціни
  const formattedPrice = isNaN(numericPrice)
    ? price
    : numericPrice.toLocaleString("uk-UA");

  return (
    <div className="relative max-w-56 min-w-32 h-72 duration-300 bg-white hover:shadow-wrap rounded-xl hover:scale-105">
      <div className="relative flex justify-center items-center h-3/4">
        <Image src={src} width={150} height={150} alt={alt} />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 z-10 transition-opacity">
          <Heart
            className="absolute top-4 right-4 text-red-500 duration-500 hover:fill-red-500"
            size={24}
          />
        </div>
      </div>
      <div className="mt-2 text-center">
        <p>{name}</p>
        <p>{formattedPrice} грн</p>
      </div>
    </div>
  );
};

export default ProductCard;
