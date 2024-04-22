import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Event from './pages/Event';
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/event/:id",
          element: <Event/>,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  
  ]);

  return <RouterProvider router={router} />;
}



export default App
