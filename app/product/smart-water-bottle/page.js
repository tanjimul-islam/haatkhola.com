import Header from "@/app/components/Header";
import ProductDetails from "@/app/components/ProductDetails";
import ProductHeader from "@/app/components/smart-water-bottle/ProductDetailsHeader";
import ProductForm from "@/app/components/smart-water-bottle/OrderForm";
import WhyTrustUs from "@/app/components/smart-water-bottle/WhyTrustUs";
import React from "react";
import OrderForm from "@/app/components/smart-water-bottle/OrderForm";
import ProductImages from "@/app/components/smart-water-bottle/ProductImages";
import ProductOfferPrice from "@/app/components/smart-water-bottle/ProductOfferPrice";

export default function ProductPage() {
  return (
    <div>
      <ProductHeader />
      <WhyTrustUs />
      <ProductImages />
      <ProductOfferPrice />
      <OrderForm />
    </div>
  );
}
