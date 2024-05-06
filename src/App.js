import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import { useEffect } from "react";
import NotFound from "./components/pages/NotFound";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import SearchPage from "./components/pages/SearchPage";
import TopSellers from "./components/pages/TopSellers";
import Sales from "./components/pages/Sales";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route path="*" element={<NotFound />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/products/" element={<Products />}></Route>
          <Route path="/top-sellers/" element={<TopSellers />}></Route>

          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route
            path="/products/:id/:title"
            element={<ProductDetail />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id:title" element={<Blog />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
