# 🖼️ File Upload with Preview

```jsx
import React, { useState } from 'react';

function ImageUploader() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" className="w-64 h-64 object-cover mt-4" />}
    </div>
  );
}
```
