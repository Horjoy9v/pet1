import React from "react";

interface CharacteristicProps {
  characteristics: string[];
}

// Виправлена назва компонента та його оголошення
export const Characteristic: React.FC<CharacteristicProps> = ({
  characteristics,
}) => {
  return (
    <>
      <div className="ml-6 mr-6 border-t border-gray-200"></div>
      <div className="ml-6 mr-6 py-6 max-h-64 overflow-y-auto">
        {/* Виведення кожної характеристики з масиву */}
        {characteristics.map((characteristic, index) => (
          <p key={index} className="mb-4">
            {characteristic}
          </p>
        ))}
      </div>
    </>
  );
};
