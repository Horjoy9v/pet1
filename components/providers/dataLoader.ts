import { Product } from "@/components/providers/IProduct";
import { Octokit } from "octokit";

const owner = "Horjoy9v";
const repo = "test-db";
const path = "db.json";
export async function fetchDataFromServer(link: string): Promise<Product[]> {
  try {
    const response = await fetch(link);
    const data = await response.json();

    // Перевірка, чи відповідь має кодування base64
    if (data && data.encoding === "base64" && data.content) {
      // Розшифрування контенту
      const decodedContent = atob(data.content);
      console.log(decodedContent);
      // Парсинг розшифрованого контенту як JSON
      const products: Product[] = JSON.parse(decodedContent);

      return products;
    } else {
      // Якщо дані не потребують розшифрування, просто повертаємо їх
      return data;
    }
  } catch (error) {
    console.error("Error fetching data from server:", error);
    return [];
  }
}

export async function fetchData(): Promise<Product[]> {
  try {
    return await fetchDataFromServer(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function fetchUniqueData(): Promise<Product[]> {
  try {
    const products = await fetchDataFromServer(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );

    const uniqueProducts: Product[] = [];
    const seenBrands = new Set<string>();

    for (const product of products) {
      if (!seenBrands.has(product.brand)) {
        seenBrands.add(product.brand);
        uniqueProducts.push(product);
      }
    }

    return uniqueProducts;
  } catch (error) {
    console.error("Error fetching unique data:", error);
    return [];
  }
}

export async function updateProductSales(productId: string, newSales: number) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );
    const data = await response.json();

    const sha = data.sha;

    const products = await fetchData();

    const index = products.findIndex(
      (product: any) => product.id === productId
    );

    if (index !== -1) {
      products[index].sales = newSales.toString();
    } else {
      throw new Error("Product not found");
    }

    const updatedContent = Buffer.from(
      JSON.stringify(products),
      "utf8"
    ).toString("base64");

    const octokit = new Octokit({
      auth: "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",
    });

    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner,
      repo,
      path,
      message: "Update db.json file",
      content: updatedContent,
      sha: sha,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log("Product sales updated successfully");
  } catch (error) {
    console.error("Error updating product sales:", error);
  }
}
