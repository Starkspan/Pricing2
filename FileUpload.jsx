import React, { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  return (
    <div>
      <label className="block mb-2 font-medium">Technische Zeichnung oder STP-Datei hochladen:</label>
      <input type="file" accept=".step,.stp,.pdf,.jpg,.png" onChange={handleChange} />
      {file && <p className="mt-2 text-sm">Hochgeladen: {file.name}</p>}
    </div>
  );
}