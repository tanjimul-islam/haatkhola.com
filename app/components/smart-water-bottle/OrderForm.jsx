"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const OrderForm = () => {
  const router = useRouter(); // Initialize useRouter
  const [deliveryCharge, setDeliveryCharge] = useState(70);
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const productPrice = 499;

  const handleDeliveryChange = (event) => {
    const selectedArea = event.target.value;
    setDeliveryCharge(selectedArea === "inside_dhaka" ? 70 : 110);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const generateOrderNumber = () => {
    // Generate a unique order number based on the current time
    const timestamp = Date.now(); // Get current timestamp
    return `HK-${timestamp}`; // Create a simple order number
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const orderNumber = generateOrderNumber(); // Generate a unique order number

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwZji8YMlAG3YfyJHzjDnN4RQtSfPXeXqKlgY0Vv7dKvjmJN5y4V_C3a4M4LVHlpBa63g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name,
            mobileNumber,
            deliveryArea: deliveryCharge === 70 ? "ঢাকার মধ্যে" : "ঢাকার বাইরে",
            fullAddress,
            quantity,
            selectedColor,
            totalPrice: productPrice * quantity + deliveryCharge,
            orderNumber, // Ensure this matches what you are accessing in the Apps Script
          }),
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully");

        // const orderNumber = generateOrderNumber(); // Generate order number
        router.push(`/success?orderNumber=${orderNumber}`); // Redirect to SuccessOrder page with order number
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (err) {
      console.error(err);
      setError("ডাটা পাঠাতে ব্যর্থ হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="order-form" className="mt-16 max-w-[1000px] mx-auto">
      <h2 className="text-3xl bg-[#231717] text-white p-6 text-center">
        অর্ডার সম্পন্ন করতে নিচের ফরমটি পূরন করে সাবমিট করুন
      </h2>
      {/* <form
        onSubmit={handleSubmit}
        className="px-6 flex flex-row justify-between py-12 shadow-md rounded-lg bg-[#F3F4F6]"
      > */}
      <form
        onSubmit={handleSubmit}
        className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 flex flex-col sm:flex-row justify-between shadow-md rounded-lg bg-[#F3F4F6] space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <div className="bg-white p-6 rounded-lg">
          <h3 className="lg:text-3xl text-2xl font-bold text-primary mb-6 text-[#f66425]">
            আপনার তথ্যগুলো দিন{" "}
          </h3>
          {/* Name Field */}
          <div className="mb-4">
            <label className="font-bold text-[21px]" htmlFor="name">
              আপনার নাম:
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 w-full rounded-md mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div className="mb-4">
            <label className="font-bold text-[21px]" htmlFor="mobile">
              মোবাইল নাম্বার:
            </label>
            <input
              type="tel"
              id="mobile"
              className={`border border-gray-300 p-2 w-full rounded-md mt-1 ${
                error ? "border-red-500" : ""
              }`}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              minLength={11}
              maxLength={11}
              pattern="[0-9]{11}"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {/* Delivery Area Selection */}
          <div className="mb-4">
            <span className="font-bold text-[21px]">
              ডেলিভারী এরিয়া সিলেক্ট করুন:
            </span>
            <div className="flex items-center mt-2">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="delivery_area"
                  value="inside_dhaka"
                  className="mr-2"
                  defaultChecked
                  onChange={handleDeliveryChange}
                />
                <span className="text-[18px]">ঢাকার মধ্যে (Inside Dhaka)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery_area"
                  value="outside_dhaka"
                  className="mr-2"
                  onChange={handleDeliveryChange}
                />
                <span className="text-[18px]">
                  ঢাকার বাইরে (Outside Dhaka){" "}
                </span>
              </label>
            </div>
          </div>

          {/* Full Address Field */}
          <div className="mb-4">
            <label className="font-bold text-[21px]" htmlFor="address">
              পূর্ন ঠিকানা দিন (লোকেশন, থানা ও জেলা):
            </label>
            <textarea
              id="address"
              className="border border-gray-300 p-2 w-full rounded-md mt-1"
              rows="3"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="bg-white p-6  rounded-lg">
          <h3 className="lg:text-3xl text-2xl font-bold text-primary mb-6 text-[#f66425]">
            অর্ডার লিস্ট{" "}
          </h3>
          {/* Quantity Field with Increment/Decrement Buttons */}
          <div className="mb-4 flex items-center">
            <label className="font-bold text-[21px] mr-2" htmlFor="quantity">
              পরিমান (পিস):
            </label>
            <button
              type="button"
              className="bg-white px-4 py-2 border border-gray-300 rounded-l-md"
              onClick={handleQuantityDecrease}
            >
              -
            </button>
            <span className="mx-2 text-lg">{quantity}</span>
            <button
              type="button"
              className="bg-white px-4 py-2 border border-gray-300 rounded-r-md"
              onClick={handleQuantityIncrease}
            >
              +
            </button>
          </div>

          {/* Color Selection Section */}
          <div className="mb-4">
            <span className="font-bold text-[21px]">কালার সিলেক্ট করুন:</span>
            <div className="flex space-x-2 mt-2">
              {/* <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="blue"
                  className="hidden"
                  checked={selectedColor === "blue"}
                  onChange={handleColorChange}
                />
                <span
                  className={`inline-block w-5 h-5 rounded-full bg-blue-500 cursor-pointer ${
                    selectedColor === "blue" ? "ring-2 ring-blue-700" : ""
                  }`}
                ></span>
                <span className="ml-2 text-[18px]">নীল</span>
              </label> */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  className="hidden"
                  checked={selectedColor === "black"}
                  onChange={handleColorChange}
                />
                <span
                  className={`inline-block w-5 h-5 rounded-full bg-black cursor-pointer ${
                    selectedColor === "black" ? "ring-2 ring-black" : ""
                  }`}
                ></span>
                <span className="ml-2 text-[18px]">কালো</span>
              </label>
            </div>
          </div>

          {/* Product Name and Image Display Section */}
          <div className="border border-gray-300 border-dashed bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex items-center">
              <img
                alt={selectedColor}
                className="w-16 h-16 object-cover mr-4"
                src="/smart-water-bottle/3.jpg"
              />
              <div>
                <h4 className="font-bold mb-1 text-[18px]">
                  স্মার্ট ওয়াটার বোতল
                </h4>
                <p className="text-[16px] text-gray-600">
                  Color:{" "}
                  <b>
                    {selectedColor.charAt(0).toUpperCase() +
                      selectedColor.slice(1)}
                  </b>
                </p>
                <p className="text-[16px] text-gray-600">
                  Qty: x <b>{quantity}</b>
                </p>
                <p className="text-[16px] text-gray-600">
                  Price: Tk <b>{productPrice}</b>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="text-[16px]">ডেলিভারি চার্জ</span>
                <span className="text-[16px]">Tk {deliveryCharge}</span>
              </div>
              <hr />
              <div className="flex justify-between mt-2">
                <span className="font-bold">সর্বমোট</span>
                <span className="font-bold">
                  Tk {productPrice * quantity + deliveryCharge}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`text-[21px] font-bold bg-[#f66425] text-white p-2 rounded-full w-full hover:bg-[#f66425] transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "অর্ডার প্রসেস হচ্ছে..." : "অর্ডার করুন"}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
