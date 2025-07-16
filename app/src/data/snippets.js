const snippets = [
  {
    "id": 1,
    "slug": "react-node-crud",
    "title": "React Node CRUD",
    "summary": "Learn to build a full-stack app with a Node.js/Express backend and a React frontend that performs basic Create, Read, Update, Delete operations.",
    "keyConcepts": [
      "Express Router",
      "useEffect",
      "axios",
      "REST API"
    ],
    "file": "/snippets/01-react-node-crud.md"
  },
  {
    "id": 2,
    "slug": "jwt-auth-react-node",
    "title": "JWT Auth React Node",
    "summary": "Set up a secure login system using JSON Web Tokens. Covers backend token generation and frontend storage/validation.",
    "keyConcepts": [
      "jsonwebtoken",
      "bcryptjs",
      "React Context",
      "auth middleware"
    ],
    "file": "/snippets/02-jwt-auth-react-node.md"
  },
  {
    "id": 3,
    "slug": "file-upload-react-node",
    "title": "File Upload React Node",
    "summary": "Upload images from React to Node using `FormData` and `Multer`, and preview them in the UI.",
    "keyConcepts": [
      "Multer",
      "Express",
      "FormData",
      "React hooks"
    ],
    "file": "/snippets/03-file-upload-react-node.md"
  },
  {
    "id": 4,
    "slug": "realtime-chat-react-node",
    "title": "Realtime Chat React Node",
    "summary": "Build a simple live chat app using WebSockets powered by `Socket.IO` on both frontend and backend.",
    "keyConcepts": [
      "socket.io",
      "useEffect",
      "useRef",
      "server-sent events"
    ],
    "file": "/snippets/04-realtime-chat-react-node.md"
  },
  {
    "id": 5,
    "slug": "server-side-rendering-react-node",
    "title": "Server Side Rendering React Node",
    "summary": "Implement server-side rendering with React on an Express server for faster page loads and SEO.",
    "keyConcepts": [
      "ReactDOMServer",
      "Express",
      "hydrate",
      "routing"
    ],
    "file": "/snippets/05-server-side-rendering-react-node.md"
  },
  {
    "id": 6,
    "slug": "react-usestate-useeffect-basics",
    "title": "React useState & useEffect Basics",
    "summary": "Learn how to use `useState` for managing state and `useEffect` for handling side effects like fetching data or running logic after render in React components.",
    "keyConcepts": [
      "useState",
      "useEffect",
      "React lifecycle",
      "side effects",
      "state updates"
    ],
    "file": "/snippets/06-react-usestate-useeffect-basics.md"
  },
  {
    "id": 7,
    "slug": "react-form-handling",
    "title": "React Form Handling",
    "summary": "Learn how to build controlled forms in React by managing form state, validating inputs, and handling form submissions.",
    "keyConcepts": [
      "useState",
      "controlled components",
      "form validation",
      "onChange",
      "onSubmit"
    ],
    "file": "/snippets/07-react-form-handling.md"
  },
  {
    "id": 8,
    "slug": "react-conditional-rendering",
    "title": "Conditional Rendering in React",
    "summary": "Learn how to render components conditionally using JavaScript logic in JSX. Covers ternary operators, short-circuiting, and conditional component display.",
    "keyConcepts": [
      "ternary",
      "&&",
      "if statements",
      "dynamic JSX",
      "conditional components"
    ],
    "file": "/snippets/08-react-conditional-rendering.md"
  },
  {
    "id": 9,
    "slug": "react-list-rendering",
    "title": "React List Rendering",
    "summary": "Learn how to dynamically render lists of items in React using `.map()` and manage unique keys for performance and correctness.",
    "keyConcepts": [
      ".map()",
      "keys",
      "arrays",
      "list components",
      "conditional rendering"
    ],
    "file": "/snippets/09-react-list-rendering.md"
  },
  {
    "id": 10,
    "slug": "react-router-basics",
    "title": "React Router Basics",
    "summary": "Learn how to set up client-side routing in a React application using `react-router-dom`. Includes creating routes, links, nested routes, and dynamic params.",
    "keyConcepts": [
      "react-router-dom",
      "Link",
      "Routes",
      "Route",
      "useParams",
      "BrowserRouter"
    ],
    "file": "/snippets/10-react-router-basics.md"
  },
  {
    "id": 11,
    "slug": "simple-express-api",
    "title": "Simple Express API",
    "summary": "Learn how to build a basic Node.js API using Express. Handle simple `GET` and `POST` requests and return JSON responses — perfect for backend beginners.",
    "keyConcepts": [
      "express",
      "app.get",
      "app.post",
      "req.body",
      "JSON response"
    ],
    "file": "/snippets/11-simple-express-api.md"
  },
  {
    "id": 12,
    "slug": "query-params-express",
    "title": "Handling Query Params in Express",
    "summary": "Learn how to access and use query parameters (`?key=value`) and route parameters (`/users/:id`) in Express routes. Understand how to use `req.query` and `req.params` to handle incoming data.",
    "keyConcepts": [
      "req.query",
      "req.params"
    ],
    "file": "/snippets/12-query-params-express.md"
  },
  {
    "id": 13,
    "slug": "express-middleware",
    "title": "Basic Middleware in Express",
    "summary": "Learn what middleware is in Express and how to use it to log requests, modify request/response objects, and control the flow of your app using `next()`.",
    "keyConcepts": [
      "middleware",
      "next()",
      "request logger",
      "custom functions",
      "app.use"
    ],
    "file": "/snippets/13-express-middleware.md"
  },
  {
    "id": 14,
    "slug": "static-files-express",
    "title": "Serving Static Files in Express",
    "summary": "Learn how to serve static files like images, CSS, and JavaScript using Express. This is useful for making your backend serve assets directly.",
    "keyConcepts": [
      "express.static"
    ],
    "file": "/snippets/14-static-files-express.md"
  },
  {
    "id": 15,
    "slug": "env-variables-node",
    "title": "Environment Variables in Node",
    "summary": "Learn how to manage environment-specific settings like API keys and database URLs using `.env` files and the `dotenv` package in Node.js.",
    "keyConcepts": [
      ".env",
      "dotenv",
      "process.env"
    ],
    "file": "/snippets/15-env-variables-node.md"
  },
  {
    "id": 16,
    "slug": "react-hooks-overview",
    "title": "React Hooks Overview",
    "summary": "Learn the most essential React hooks like `useState`, `useEffect`, and `useContext` with sample code. Understand how each hook helps you manage state, side effects, and performance in functional components.",
    "keyConcepts": [
      "useState",
      "useEffect",
      "useContext",
      "useRef",
      "useMemo",
      "useCallback",
      "useReducer"
    ],
    "file": "/snippets/16-react-hooks-overview.md"
  },
  {
    "id": 17,
    "slug": "building-a-rest-api-in-laravel",
    "title": "Building a REST API in Laravel: From Model to Test",
    "summary": "Learn how to build a full-featured REST API in Laravel 10 using PHP 8.2. This tutorial covers everything from project setup to writing a feature test for CRUD operations.",
    "keyConcepts": [
      "Laravel 10",
      "REST API",
      "Eloquent",
      "FormRequest",
      "Service Layer",
      "Feature Testing",
      "CRUD"
    ],
    "file": "/snippets/17-building-a-rest-api-in-laravel.md"
  },
  {
    "id": 18,
    "slug": "blade-basics-and-layouts",
    "title": "Blade Basics and Layouts",
    "summary": "Learn how to use Laravel's Blade templating engine to build clean, reusable views with layouts, partials, and control structures.",
    "keyConcepts": [
      "Blade",
      "@extends",
      "@section",
      "@include",
      "layouts",
      "components"
    ],
    "file": "/snippets/18-blade-basics-and-layouts.md"
  },
  {
    "id": 19,
    "slug": "essential-laravel-artisan-commands",
    "title": "Essential Laravel Artisan Commands",
    "summary": "Learn how to use Laravel's powerful Artisan CLI to speed up development. This tutorial covers the most useful commands for generating files, running migrations, debugging, and more.",
    "keyConcepts": [
      "artisan",
      "php artisan make",
      "artisan serve",
      "migrate",
      "route:list",
      "tinker",
      "clear commands"
    ],
    "file": "/snippets/19-essential-laravel-artisan-commands.md"
  },
  {
    "id": 20,
    "slug": "media3-webview-player",
    "title": "Integrating Media3 ExoPlayer in a WebView-based TV App",
    "summary": "Learn how to build a hybrid IPTV Android app using Media3 ExoPlayer with a WebView that communicates through JavaScript to play, pause, resize, and rotate video streams (MP4, UDP multicast, DRM).",
    "keyConcepts": [
      "android",
      "iptv",
      "media3",
      "exoplayer",
      "webview",
      "udp",
      "javascriptinterface"
    ],
    "file": "/snippets/20-media3-webview-player.md"
  }
];

export default snippets;
