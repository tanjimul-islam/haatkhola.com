"use client";

import React from "react";
import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="product-images max-w-[1000px] mx-auto px-4 py-6">
      {/* Product Description */}
      <p className="text-xl mb-6 mt-6">
        সাধারণত আমরা ফ্লাক্স ব্যবহার করি গরম পানি রাখার জন্য। এই স্পেশাল ওয়াটার
        বোতলটিতে আপনি যেমন গরম পানি ১২ ঘণ্টা পর্যন্ত গরম রাখতে পারবেন একইভাবে
        ঠান্ডা পানি ও ১২ ঘণ্টা পর্যন্ত ঠান্ডা থাকবে। 304 stainless steel এর তৈরি
        বিশেষ এই ফ্লাক্স টি অনেক লং লাস্টিং একটি প্রোডাক্ট। এখানে ভেতরে একটি
        ছাকনি আছে এজন্য সরাসরি লিকারসহ চা রাখতে পারবেন।
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
        {[
          "/smart-water-bottle/1.jpg",
          "/smart-water-bottle/2.png",
          "/smart-water-bottle/3.jpg",
          "/smart-water-bottle/4.jpg",
        ].map((src, index) => (
          <Image
            key={index}
            className="mt-2 mb-0"
            src={src}
            alt={`Product image ${index + 1}`}
            width={1000}
            height={1000}
          />
        ))}
      </div>

      {/* Additional Description */}
      <p className="text-xl mt-6">
        শীতের সময় বারবার চা বা কফি খাওয়ার জন্য এটি হতে পারে একটি আদর্শ
        প্রডাক্ট। কাজের সময় আপনার পাশে এটি রেখে ১২ ঘণ্টা পর্যন্ত নিজেকে সতেজ
        রাখতে পারবেন। এই স্পেশাল ওয়াটার বোতলটিতে এলইডি টাচ স্ক্রীণ আছে,
        তাপমাত্রা দেখানোর জন্য।
      </p>
      <p className="text-xl mt-6">
        আমরা এই প্রোডাক্টটি অত্যন্ত যত্ন সহকারে প্যাকেজিং করে দিচ্ছি বলে আপনি
        চাইলে এটি যে কাউকে উপহার হিসেবে পাঠাতে পারেন। প্রবাসী ভাই বোনেরা আত্মীয়
        স্বজনের জন্য গিফট হিসেবে দিতে পারবেন।
      </p>
    </div>
  );
};

export default ProductImages;
