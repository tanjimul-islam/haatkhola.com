"use client";

import React from "react";
import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="product-images max-w-[1000px] mx-auto px-4 py-6">
      {/* Product Description */}
      <p className="text-xl mb-6 mt-6 text-justify	">
        🌟 স্মার্ট ওয়াটার বোতল: LED টাচ স্ক্রীন দ্বারা সজ্জিত। স্ক্রীনে ট্যাপ
        করে ভিতরের তাপমাত্রা দেখতে পারবেন আপনার পানীয় কখনও খুব ঠান্ডা বা খুব
        গরম হবে না এবং সেরা কথা, চার্জারের প্রয়োজন নেই, তাই এটি সবসময়
        ব্যবহারের জন্য প্রস্তুত।
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
        {[
          "/smart-water-bottle/1.jpg",
          "/smart-water-bottle/2.jpg",
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
      <p className="text-xl mt-6 text-justify	">
        🌟 12 ঘণ্টা পর্যন্ত পানি গরম রাখবে, আর আপনার পানীয়ের সঠিক তাপমাত্রা LED
        Display-এ সহজেই দেখতে পারবেন। 😎
      </p>
      <p className="text-xl mt-6 text-justify	">
        🌟 Modern Style Hot & Cold Flask - ফুড গ্রেডের স্টেইনলেস স্টিল দিয়ে
        তৈরি, যা পানীয়ের তাপমাত্রা ধরে রাখতে সক্ষম, এবং সম্পূর্ণ ওয়াটারপ্রুফ ও
        লিকেজ প্রুফ।
      </p>
      <p className="text-xl mt-6 text-justify	">
        🌟 স্মার্ট পোর্টেবল LED Flask, যা সহজেই বহনযোগ্য। যখন খুশি, যেখানে
        খুশি—নিয়ে যেতে পারবেন আপনার প্রিয় পানীয়! ☕
      </p>
      <p className="text-xl mt-6 text-justify	">
        🌟 এবার শীতে থাকুক আপনার পানীয় সবসময় একদম ঠিক তাপমাত্রায়, স্টাইল আর
        স্মার্টনেসের সঙ্গে!
      </p>
    </div>
  );
};

export default ProductImages;
