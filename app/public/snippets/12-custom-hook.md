# ⚙️ Custom Hook Example: useWindowWidth

```jsx
// useWindowWidth.js
import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```

```jsx
// Usage
import { useWindowWidth } from './useWindowWidth';

function ResponsiveComponent() {
  const width = useWindowWidth();
  return <p>Current width: {width}px</p>;
}
```
