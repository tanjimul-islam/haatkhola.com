"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessOrderClient = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-[#f66425]">অর্ডার সফল হয়েছে</h1>
      <p className="text-2xl my-4 font-bold">
        আপনার অর্ডার সফলভাবে স্থাপন করা হয়েছে!!
      </p>
      <p className="text-xl">অর্ডার নাম্বার: {orderNumber}</p>
      <button
        onClick={() =>
          (window.location.href = "https://www.facebook.com/haatkhola.official")
        }
        className="mt-4 text-[21px] font-bold bg-[#f66425] text-white px-6 py-3 rounded-full hover:bg-[#f66425] transition"
      >
        আরো পণ্য দেখুন
      </button>
    </div>
  );
};

const SuccessOrder = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p>Loading...</p>;
  }

  return <SuccessOrderClient />;
};

export default SuccessOrder;
