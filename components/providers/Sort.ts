import { Product } from "@/components/providers/IProduct";
import { fetchData } from "@/components/providers/dataLoader";

export async function sortByPopularity(): Promise<Product[]> {
  try {
    const data = await fetchData();
    return data.sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
  } catch (error) {
    console.error("Error sorting by popularity:", error);
    return [];
  }
}

// Функція сортування за ціною (від дешевшого до дорогого)
export async function sortByPriceLowToHigh(): Promise<Product[]> {
  try {
    const data = await fetchData();
    return data.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } catch (error) {
    console.error("Error sorting by price (low to high):", error);
    return [];
  }
}

// Функція сортування за ціною (від дорогого до дешевого)
export async function sortByPriceHighToLow(): Promise<Product[]> {
  try {
    const data = await fetchData();
    return data.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } catch (error) {
    console.error("Error sorting by price (high to low):", error);
    return [];
  }
}
