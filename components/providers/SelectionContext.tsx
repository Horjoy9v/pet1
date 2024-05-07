"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectionContextType {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

interface SelectionProviderProps {
  children: ReactNode;
}

export const SelectionProvider: React.FC<SelectionProviderProps> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <SelectionContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
