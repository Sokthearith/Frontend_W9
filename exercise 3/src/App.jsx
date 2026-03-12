import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const total = React.useMemo(() => {
    return orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
  }, [orders]);

  function incrementQuantity(product) {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.product === product
          ? { ...order, quantity: order.quantity + 1 }
          : order
      )
    );
  }

  function decrementQuantity(product) {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.product === product
          ? { ...order, quantity: Math.max(0, order.quantity - 1) }
          : order
      )
    );
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) => (
          <OrderCard
            key={order.product}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onIncrement={() => incrementQuantity(order.product)}
            onDecrement={() => decrementQuantity(order.product)}
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(1)}></CheckoutButton>
    </>
  );
}
