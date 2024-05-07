"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/components/providers/IProduct";
import ProductCard from "@/components/(main)/ProductCard";
import { useSelection } from "../providers/SelectionContext";
import { fetchData } from "@/components/providers/dataLoader";

const ProductList: React.FC = () => {
  const { selectedValue } = useSelection();
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchDataAndHandleLoad = async () => {
      try {
        const data = await fetchData();
        let sortedProducts: Product[] = [...data];
        if (selectedValue === "popular") {
          sortedProducts.sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
        } else if (selectedValue === "low") {
          sortedProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        } else if (selectedValue === "high") {
          sortedProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        }
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndHandleLoad();
  }, [selectedValue]);

  const handleClick = (productId: string) => {
    router.push(productId);
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.id)}
          className="cursor-pointer"
        >
          {product.images && product.images.length > 0 && (
            <ProductCard
              src={product.images[0].src}
              alt={product.images[0].alt}
              name={product.name}
              price={product.price}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ProductList;
