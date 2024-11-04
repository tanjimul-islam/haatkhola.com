"use client";

import React from "react";

const WhyTrustUs = () => {
  return (
    <div className="why-trust-us max-w-[1000px] mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Section Header */}
      <h3 className="text-2xl font-semibold bg-[#CFFAE1] text-muted px-3 py-2 rounded">
        আমাদের উপর কেন আস্থা রাখবেন ??
      </h3>

      {/* Trust Points List */}
      <ul className="list-none text-xl ml-0 pl-0 mt-4 space-y-2">
        {[
          "✅ আমরা দিচ্ছি পণ্য হাতে পেয়ে টাকা পরিশোধের সুযোগ",
          "✅ সারা বাংলাদেশে কুরিয়ারের মাধ্যমে হোম ডেলিভারি পাবেন",
          "✅ যে কোন সময় আমাদের সাথে যোগাযোগ করতে পারবেন",
          "✅ আমরা আপনার কাছে অগ্রিম টাকা নিচ্ছি না",
          "✅ আমাদের হোয়াটসঅ্যাপ নাম্বারে ভিডিও কলে প্রডাক্ট দেখতে পারবেন",
          "✅ আমরা যত্ন সহকারে প্যাকেজিং করে থাকি",
        ].map((item, index) => (
          <li
            key={index}
            className="px-2 py-1 bg-gray-100 rounded text-[20px] text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      <p className="mt-4 font-semibold text-xl">
        তো আর দেরি কেন? এখনই ঘরে বসে অর্ডার করুন এবং প্রোডাক্ট হাতে বুঝে পেয়ে
        টাকা পরিশোধ করুন।
      </p>
    </div>
  );
};

export default WhyTrustUs;
