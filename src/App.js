import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AdminAddBlog from "./components/pages/AdminAddBlog";
import AdminAddProduct from "./components/pages/AdminAddProduct";
import AdminBlogs from "./components/pages/AdminBlogs";
import AdminCategories from "./components/pages/AdminCategories";
import AdminLayout from "./components/pages/AdminLayout";
import AdminProductDetail from "./components/pages/AdminProductDetail";
import AdminProducts from "./components/pages/AdminProducts";
import AdminSignIn from "./components/pages/AdminSignIn";
import Blog from "./components/pages/Blog";
import Categories from "./components/pages/Categories";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import NotFound from "./components/pages/NotFound";
import ProductDetail from "./components/pages/ProductDetail";
import Products from "./components/pages/Products";
import Sales from "./components/pages/Sales";
import SearchPage from "./components/pages/SearchPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import TopSellers from "./components/pages/TopSellers";
import Cart from "./components/pages/Cart";
import React, { useState, useEffect } from "react";
import Spinner from "./components/functional/Spinner";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>

            <Route path="*" element={<NotFound />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/products/" element={<Products />}></Route>
            <Route path="/top-sellers/" element={<TopSellers />}></Route>

            <Route path="/sales" element={<Sales />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route
              path="/products/:id/:title"
              element={<ProductDetail />}
            ></Route>
            <Route path="/categories/" element={<Categories />}></Route>
            <Route path="/cart" element={<Cart />}></Route>

            <Route
              path="/admin-products/:id/:title"
              element={<AdminProductDetail />}
            ></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id:title" element={<Blog />}></Route>
          </Route>
          <Route path="/admin/sign-in" element={<AdminSignIn />}></Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="products/add-product/:id"
              element={<AdminAddProduct />}
            ></Route>
            <Route
              path="products/add-product/"
              element={<AdminAddProduct />}
            ></Route>
            <Route path="products/" element={<AdminProducts />}></Route>
            <Route path="categories/" element={<AdminCategories />}></Route>
            <Route
              path="categories/add-category/:id"
              element={<AdminAddProduct />}
            ></Route>
            <Route
              path="categories/add-category/"
              element={<AdminAddProduct />}
            ></Route>
            <Route path="blogs/" element={<AdminBlogs />}></Route>
            <Route path="blogs/add-blog/:id" element={<AdminAddBlog />}></Route>
            <Route path="blogs/add-blog/" element={<AdminAddBlog />}></Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
