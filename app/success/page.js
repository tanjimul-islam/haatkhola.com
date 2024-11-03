"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessOrderClient = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">অর্ডার সফল হয়েছে</h1>
      <p className="text-lg">আপনার অর্ডার সফলভাবে স্থাপন করা হয়েছে!!</p>
      <p className="mt-2">অর্ডার নাম্বার: {orderNumber}</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md"
      >
        Go to Home
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
