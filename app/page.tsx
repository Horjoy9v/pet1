import React from "react";
import Header from "@/components/(main)/Header";
import Sidebar from "@/components/(main)/Sidebar";
import ProductList from "@/components/(main)/ProductList";
import { SelectionProvider } from "@/components/providers/SelectionContext";

export default function Home() {
  return (
    <main>
      <Header />
      <SelectionProvider>
        <div className="flex items-start justify-center mt-36">
          <aside className="px-8">
            <Sidebar />
          </aside>
          <div className="grid gap-4 grid-cols-5 p-10">
            <ProductList />
          </div>
        </div>
      </SelectionProvider>
    </main>
  );
}
