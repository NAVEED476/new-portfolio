import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experince";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/exp",
      element: <Experience />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes}>
        <Navbar />
      </RouterProvider>
    </div>
  );
}

export default App;
