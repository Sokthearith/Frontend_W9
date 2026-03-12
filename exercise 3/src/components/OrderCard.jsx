import React from "react";

export default function OrderCard({
  product,
  price,
  quantity,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$ " + price}</small>
      </div>

      <div className="order-quantity">
        <button
          className="order-button"
          type="button"
          onClick={onDecrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <h4>{quantity}</h4>
        <button
          className="order-button"
          type="button"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
