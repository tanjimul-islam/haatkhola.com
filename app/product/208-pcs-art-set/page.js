import OrderForm from "@/app/components/208-pcs-art-set/OrderForm";
import ProductHeader from "@/app/components/208-pcs-art-set/ProductDetailsHeader";
import ProductImages from "@/app/components/208-pcs-art-set/ProductImages";
import ProductOfferPrice from "@/app/components/208-pcs-art-set/ProductOfferPrice";
import WhyTrustUs from "@/app/components/208-pcs-art-set/WhyTrustUs";
import Footer from "@/app/components/Footer";
import React from "react";

const ArtSet = () => {
  return (
    <div>
      <ProductHeader />
      <WhyTrustUs />
      <ProductImages />
      <ProductOfferPrice />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default ArtSet;
