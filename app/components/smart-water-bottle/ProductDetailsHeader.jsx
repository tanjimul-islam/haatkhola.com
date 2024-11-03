"use client";

import React from "react";

const ProductHeader = () => {
  return (
    <div className="product-image-area">
      <div className="max-w-[1000px] mx-auto px-[15px]">
        {/* Product Title */}
        <h1 className="font-extrabold text-primary lg:text-5xl md:text-4xl text-3xl leading-[120%] text-center lg:mb-8 lg:mt-8 mb-6">
          স্মার্ট ওয়াটার বোতল
        </h1>

        {/* Key Features */}
        <div className="key-features flex flex-wrap gap-2 text-center justify-center mb-6">
          <Feature text="✅ ১২ ঘন্টা পর্যন্ত ঠান্ডা অথবা গরম পানি রাখতে পারবেন" />
          <Feature text="✅ হাই কোয়ালিটি Stainless Steel ম্যাটারিয়াল দিয়ে তৈরি" />
          <Feature text="✅ বাসা, অফিস কিংবা ট্যুরে স্বাচ্ছন্দের সাথে এটি ব্যবহার করতে পারবেন" />
          <Feature text="✅ এই স্মার্ট কাপটি তে রয়েছে ৫ লেয়ারের বিশেষ ইনসুলেশন প্রসেস" />
        </div>

        {/* Order Button */}
        <div className="order-button flex justify-center mb-8 mt-8">
          <a
            href="#order-form"
            className="bg-[#F66425] border-[#f66425] text-white inline-flex items-center gap-2.5 justify-center whitespace-nowrap text-[24px] font-normal border-2 border-primary transition-all duration-300 bg-primary text-secondary-foreground rounded-full px-14 py-3 w-full sm:w-auto hover:bg-[#e7523e] hover:border-[#e7523e] hover:text-white"
          >
            অর্ডার করতে ক্লিক করুন
          </a>
        </div>
      </div>
    </div>
  );
};

// Component for each feature item
const Feature = ({ text }) => (
  <p className="px-2 py-2 bg-[#cffae1] text-[16px] leading-tight text-center rounded lg:text-[20px] text-muted-foreground font-bold">
    {text}
  </p>
);

export default ProductHeader;
