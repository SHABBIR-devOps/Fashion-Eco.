import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import CategoryPage from "../pages/Category/CategoryPage";
import ProductDetails from "../pages/Product/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";
import Orders from "../pages/Orders/Orders";
import Tracking from "../pages/Tracking/Tracking";
import VirtualTryOn from "../pages/VirtualTryOn/VirtualTryOn";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

import Profile from "../pages/Profile/Profile";
import AddressBook from "../pages/Profile/AddressBook";
import ProfileSavedLooks from "../pages/Profile/SavedLooks";
import Security from "../pages/Profile/Security";
import Settings from "../pages/Profile/Settings";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";

import GuestRoute from "./GuestRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking/:orderId" element={<Tracking />} />
      <Route path="/virtual-try-on" element={<VirtualTryOn />} />

      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/profile" element={<Profile />}>
        <Route index element={<AddressBook />} />
        <Route path="addresses" element={<AddressBook />} />
        <Route path="looks" element={<ProfileSavedLooks />} />
        <Route path="security" element={<Security />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
