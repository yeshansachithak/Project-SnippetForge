# 🎯 Conditional Rendering

```jsx
function Welcome({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}
```
