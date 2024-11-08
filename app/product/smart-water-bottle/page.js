import Footer from "@/app/components/Footer";
import OrderForm from "@/app/components/smart-water-bottle/OrderForm";
import ProductHeader from "@/app/components/smart-water-bottle/ProductDetailsHeader";
import ProductImages from "@/app/components/smart-water-bottle/ProductImages";
import ProductOfferPrice from "@/app/components/smart-water-bottle/ProductOfferPrice";
import WhyTrustUs from "@/app/components/smart-water-bottle/WhyTrustUs";
export const metadata = {
  title: "স্মার্ট ওয়াটার বোতল",
  description: "Your Trusted E-commerce",
};
export default function ProductPage() {
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
}
