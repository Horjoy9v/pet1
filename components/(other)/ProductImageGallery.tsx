import React, { useEffect, useState } from "react";
import { fetchData } from "@/components/providers/dataLoader";
import { Product } from "@/components/providers/IProduct";
import Image from "next/image";

interface ProductImageGalleryProps {
  id: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchDataAndHandleLoad = async () => {
      try {
        const data = await fetchData();
        const selectedProduct = data.find((product) => product.id === id);
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndHandleLoad();
  }, [id]);

  return (
    <div className="flex-grow flex justify-center items-start space-x-4">
      <div
        className="flex flex-col items-center overflow-y-auto overflow-hidden rounded-lg bg-white shadow-wrap mr-8 ml-8"
        style={{ maxHeight: "600px", scrollbarWidth: "none" }}
      >
        {product &&
          product.images.map((image, index) => (
            <div
              className="p-1"
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.src}
                width={100}
                height={100}
                alt={image.alt}
                className="rounded-lg cursor-pointer duration-300 hover:scale-110"
              />
            </div>
          ))}
      </div>
      <div>
        {product && (
          <Image
            src={product.images[selectedIndex].src}
            width={600}
            height={600}
            alt={product.images[selectedIndex].alt}
            className="rounded-lg bg-white shadow-wrap"
          />
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;
