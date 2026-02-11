
"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    items,
    subtotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-semibold mb-4">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

      {/* Products */}
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 border-b pb-6">

            <div className="relative w-28 aspect-square">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>

              <p className="text-sm text-gray-600 mt-1">
                ${item.price}
              </p>

              <p className="text-sm font-medium mt-2">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 border"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 border"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 mt-3"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border p-6 rounded-xl h-fit">
        <h3 className="text-lg font-semibold mb-6">
          Order Summary
        </h3>

        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-4">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
