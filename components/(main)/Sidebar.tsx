// Sidebar.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { useSelection } from "../providers/SelectionContext";

const Sidebar: React.FC = () => {
  const { selectedValue, setSelectedValue } = useSelection();

  const handleSortChange = (value: string) => {
    setSelectedValue(value); // Встановлюємо нове значення сортування
    console.log(value);
  };

  return (
    <>
      <div className="w-64 py-4 mt-6">
        <div className="flex justify-center mb-8 rounded-lg shadow-wrap">
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="duration-300 hover:bg-gray-100">
              <SelectValue placeholder="Сортувати по..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="popular">популярності</SelectItem>
                <SelectItem value="low">спочатку дешеві</SelectItem>
                <SelectItem value="high">спочатку дорогі</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white rounded-lg shadow-wrap overflow-y-auto">
          <div className="flex justify-center mt-4 py-4">
            <p>Знайдено 14 товарів</p>
          </div>
          <div className="flex justify-center px-4 py-4">
            <Button className="w-full text-center">Очистити фільтри</Button>
          </div>
          <div className="border-t mt-4"></div>
          <div className="flex justify-center py-4">
            <p>Бренд</p>
          </div>
          <div className="flex w-full max-w-sm items-center px-4 py-4">
            <Input type="email" placeholder="Пошук..." />
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Samsung
            </label>
          </div>

          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Apple
            </label>
          </div>

          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Xiaomi
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Huawei
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Google
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Infinix
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Oscal
            </label>
          </div>
          <div className="border-t mt-4"></div>
          <div className="flex justify-center py-4">
            <p>Діагональ екрана</p>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              5
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              5.2
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              5.5
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              6.1
            </label>
          </div>
          <div className="flex justify-center py-4">
            <p>Чіпсет</p>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Apple A17 Bionicle
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Snapdragon 8 Gen 2
            </label>
          </div>
          <div className="flex items-center py-4 px-8">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none cursor-pointer ml-2"
            >
              Exynos 8890
            </label>
          </div>
        </div>
        {/* Решта коду Sidebar */}
      </div>
    </>
  );
};

export default Sidebar;
