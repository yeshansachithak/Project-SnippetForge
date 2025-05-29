# 🧱 Mapping Over an Array

```jsx
const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ul>
);
```
