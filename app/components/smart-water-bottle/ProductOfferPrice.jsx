"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ProductOfferPrice = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 ">
      {/* Product Description */}
      <p className="text-xl lg:text-2xl text-muted-foreground text-justify	">
        আমাদের স্মার্ট বোতলগুলি নিরাপদভাবে গ্রাহকদের হাতে পৌঁছানোর জন্য সতর্কতার
        সাথে প্যাকেজ করা হয়।
      </p>

      {/* Price Area */}
      <div className="text-center price-area text-3xl text-muted-foreground font-bold mt-6">
        <div className="regular-price text-2xl lg:text-3xl text-gray-400 font-normal mb-4">
          রেগুলার মূল্য: <del>৯৪৬ টাকা</del>
        </div>
        <div className="offer-price">
          শুধু আজকের জন্য অফার মূল্য:{" "}
          <span className="text-primary">599 টাকা</span>
        </div>
      </div>

      {/* Order Button */}
      <div className="order-button flex justify-center mb-8 mt-8 gap-4">
        <a
          href="#order-form"
          className="bg-[#f66425] text-white border-[#f66425] inline-flex items-center gap-2.5 justify-center whitespace-nowrap text-[24px] font-normal border-2 border-primary transition-all duration-300 bg-primary text-secondary-foreground rounded-full px-14 py-3 w-full sm:w-auto hover:bg-[#e7523e] hover:border-[#e7523e] hover:text-white"
        >
          অর্ডার করতে ক্লিক করুন
        </a>
      </div>

      {/* WhatsApp Order Option */}
      <p className="text-muted-foreground text-xl text-center">
        আপনি চাইলে আমাদের সাথে হোয়াটসঅ্যাপে কথা বলে অর্ডার করতে পারবেন।
        <b> 01977 728 358</b>
      </p>
      <div className="order-button flex justify-center my-8">
        <Link
          href="#"
          target="_blank"
          className="inline-flex items-center gap-2.5 justify-center whitespace-nowrap text-[24px] font-normal border-2 border-[#25D366] transition-all duration-300 bg-[#25D366] text-secondary-foreground rounded-full px-14 py-3 w-full sm:w-auto hover:bg-[#128C7E] hover:border-[#128C7E] hover:text-white text-white"
        >
          <FaWhatsapp size={32} className="text-white" />
          মেসেজ করুন
        </Link>
      </div>
    </div>
  );
};

export default ProductOfferPrice;
