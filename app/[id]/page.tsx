"use client";
// Також ви можете використовувати useCallback для оптимізації
// Проте зараз це необов'язково

import { Button } from "@/components/ui/button";

import {
  fetchData,
  updateProductSales,
} from "@/components/providers/dataLoader";
import { useEffect, useState } from "react";
import { Product } from "@/components/providers/IProduct";
import Header from "@/components/(main)/Header";
import ProductImageGallery from "@/components/(other)/ProductImageGallery";
import { Characteristic } from "@/components/(other)/Сharacteristics";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [sales, setSales] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchDataAndHandleLoad = async () => {
      try {
        const data = await fetchData();
        const selectedProduct = data.find(
          (product) => product.id === params.id
        );
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
  }, [params.id]);

  const handleBuyButtonClick = () => {
    if (product) {
      const updatedSales = Number(product.sales) + 1;
      updateProductSales(product.id, updatedSales);
      setSales(updatedSales);
    }
  };

  // Розрахунок зниженої ціни (15% більше)
  const discountedPrice =
    product && typeof product.price === "number"
      ? Math.round(parseFloat(product.price) * 1.15)
      : null;

  return (
    <>
      <Header />
      <div className="flex items-start justify-center mt-36">
        {product && <ProductImageGallery id={product.id} />}
        <div className="flex-grow flex flex-col justify-start items-start">
          {product && (
            <div key={product.id} className="w-3/4">
              <p className="text-2xl font-bold mb-14 text-center">
                Мобільний телефон {product.name}{" "}
              </p>
              <div className="bg-white py-6 px-6 rounded-lg shadow-wrap ">
                <div className="flex justify-between items-end">
                  {" "}
                  {/* Обгортка для розташування ціни, кнопки та кількості продажів в одному рядку */}
                  <div>
                    {discountedPrice && (
                      <p className="text-sm font-bold line-through text-gray-500">
                        {discountedPrice.toString()} грн
                      </p>
                    )}
                    <p className="text-3xl font-bold text-red-500">
                      {product.price} грн
                    </p>
                  </div>
                  <Button onClick={handleBuyButtonClick}>Купити</Button>
                </div>
                <p>Кількість продажів: {product.sales}</p>
              </div>
              <div className="bg-white rounded-lg shadow-wrap mt-11">
                <p className="py-6 text-2xl font-bold text-center">
                  Характеристики
                </p>
                {/* Використовуйте компонент Characteristic для відображення характеристик */}
                {product.characteristic && (
                  <Characteristic characteristics={product.characteristic} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border-2 m-12"></div>
      <p className="text-4xl font-bold text-center mt-32 mb-64">
        Тут опис з картінками
      </p>
    </>
  );
}
