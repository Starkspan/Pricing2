import React from 'react';
import FileUpload from './components/FileUpload';
import STPViewer from './components/STPViewer';
import PriceCalculator from './components/PriceCalculator';

export default function App() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">CNC-Preiskalkulator</h1>
      <FileUpload />
      <STPViewer />
      <PriceCalculator />
    </div>
  );
}