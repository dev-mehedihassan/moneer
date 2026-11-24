import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RootLayout from "./components/layouts/RootLayout";
import Error from "./components/layouts/Error";
import FAQIndex from "./components/pages/faq/FAQIndex";
import ContactIndex from "./components/pages/contact-us/Index";


const routes = createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQIndex />} />
      <Route path="/contact-us" element={<ContactIndex />} />
    </Route>
    <Route path="*" element={<Error />} />
  </>
);

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
