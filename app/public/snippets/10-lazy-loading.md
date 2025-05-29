# 📂 Lazy Loading Components

```jsx
import React, { lazy, Suspense } from 'react';

const LazyPage = lazy(() => import('./LazyPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyPage />
    </Suspense>
  );
}
```
