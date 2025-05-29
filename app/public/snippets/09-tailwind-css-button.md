# 🎨 Tailwind CSS Button
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js
content: ['./src/**/*.{js,jsx,ts,tsx}']
```

```jsx
const Button = ({ children }) => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
);
```
