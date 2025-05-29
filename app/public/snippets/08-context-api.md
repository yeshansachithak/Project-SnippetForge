# 🌐 Context API with Global State

```jsx
// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

// App.jsx
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}
```
