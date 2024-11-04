import OrderForm from "@/app/components/smart-water-bottle/OrderForm";
import ProductHeader from "@/app/components/smart-water-bottle/ProductDetailsHeader";
import ProductImages from "@/app/components/smart-water-bottle/ProductImages";
import ProductOfferPrice from "@/app/components/smart-water-bottle/ProductOfferPrice";
import WhyTrustUs from "@/app/components/smart-water-bottle/WhyTrustUs";

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
