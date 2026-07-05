import React from "react";
import HeroBanner from "../../components/home/HeroBanner";
import FeaturedCollection from "../../components/home/FeaturedCollection";
import NewArrivals from "../../components/home/NewArrivals";
import FlashSale from "../../components/home/FlashSale";
import TrendingProducts from "../../components/home/TrendingProducts";
import TopBrands from "../../components/home/TopBrands";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollection />
      <NewArrivals />
      <FlashSale />
      <TrendingProducts />
      <TopBrands />
      <Testimonials />
      <Newsletter />
    </>
  );
}
