import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/project/:id", element: <Project /> },
      { path: "/contact", element: <Contact /> },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
