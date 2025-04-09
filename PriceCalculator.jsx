import React, { useState } from 'react';

export default function PriceCalculator() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    const setupCost = 60;
    const programmingCost = 30;
    const machiningCost = 2.5 * quantity; // Dummy value
    const total = (setupCost + programmingCost + machiningCost) / quantity;
    setPrice(total.toFixed(2));
  };

  return (
    <div className="space-y-2">
      <label className="block font-medium">Stückzahl:</label>
      <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Number(e.target.value))} className="border p-1" />
      <button onClick={calculatePrice} className="px-4 py-2 bg-blue-600 text-white rounded">Preis berechnen</button>
      {price && <p className="mt-2 font-semibold">Preis pro Stück: {price} €</p>}
    </div>
  );
}