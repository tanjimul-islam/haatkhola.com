"use client";

import React from "react";
import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="product-images max-w-[1000px] mx-auto px-4 py-6">
      {/* Product Description */}
      <p className="text-xl mb-6 mt-6 text-justify	">
        🌟 স্মার্ট ওয়াটার বোতল: LED টাচ স্ক্রীন দ্বারা সজ্জিত। স্ক্রীনে ট্যাপ
        করে ভিতরের তাপমাত্রা পড়ুন। আপনার পানীয় কখনও খুব ঠান্ডা বা খুব গরম হবে
        না এবং সেরা কথা, চার্জারের প্রয়োজন নেই, তাই এটি সবসময় ব্যবহারের জন্য
        প্রস্তুত।
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
        🌟 ডিজাইন: আঘাত থেকে রক্ষা করতে কঠিন বোতল, 500 ML ধারণ ক্ষমতা।
        detachable চা স্ট্রেনার অন্তর্ভুক্ত, গরম এবং ঠান্ডা চা তৈরির জন্য আদর্শ।
        NON-SLIP বটম, সিলিকন বটম স্মার্ট বোতলটি স্লাইডিং এবং ফেলা থেকে রক্ষা
        করে। স্ক্রু টপ রাবার সিলিকন সিল।
      </p>
      <p className="text-xl mt-6 text-justify	">
        🌟 ব্যবহার: সমস্ত চারটি মৌসুমের জন্য চমৎকার, তিনটি ক্লাসিক রঙ বেছে
        নেওয়ার জন্য উপলব্ধ। অফিস, সমুদ্র সৈকত, স্কুল, পিকনিক, হাইকিং, সাইক্লিং,
        রানিং, জিম ইত্যাদির জন্য বহনযোগ্য লাইটওয়েট ভ্যাকুয়াম ফ্লাস্ক। গাড়ির
        কাপ হোল্ডারে পুরোপুরি ফিট করে। পরিবারের সদস্যদের, বন্ধুদের, সহকর্মীদের
        এবং যেকোনো বয়সের অন্যদের জন্য দুর্দান্ত উপহার।
      </p>
      <p className="text-xl mt-6 text-justify	">
        🌟 গুণমান: প্রিমিয়াম স্টেইনলেস স্টিল দিয়ে তৈরি লাইটওয়েট ভ্যাকুয়াম
        ফ্লাস্ক যা ২৪ ঘণ্টা ঠান্ডা এবং গরম পানীয়গুলি ধরে রাখে। ঢাকনাটি ১০০
        শতাংশ কো-পলিমার সিলিকন নিয়ে গঠিত যা সুরক্ষিত এবং স্বাস্থ্যকর ব্যবহারের
        জন্য। ব্যাটারি দৈনিক ব্যবহারে ৮ বছরের জন্য পরীক্ষিত। BPA মুক্ত, গন্ধ
        মুক্ত, কোন ফেডিং, খোসা ছাড়ানো বা ফাটল নেই। কোন জং, কোন ক্ষয়, টেকসই।
      </p>
    </div>
  );
};

export default ProductImages;
