import React, { useState } from "react";
import "./App.css";
import ShoppingCart from "./components/cart/cart";
import Prod from "./components/product/product";
import { productsList } from "./components/product/product";
export interface Prods {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  heading: string;
  des: string;
  quantity: number;
}

function App() {
  const [productList, setProductList] = useState<Prods[]>([
    {
      id: 1,
      name: "Airpods Pro",
      price: 24900,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      stock: 10,
      quantity: 0,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 40900,
      image: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      stock: 15,
      quantity: 0,
      heading: "You’ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
    },
    {
      id: 3,
      name: "Macbook Pro",
      price: 199900,
      image: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      stock: 20,
      quantity: 0,
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
    },
    {
      id: 4,
      name: "iPhone 11 pro",
      price: 106600,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      stock: 35,
      quantity: 0,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
    {
      id: 5,
      name: "iPad Pro",
      price: 71900,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      stock: 25,
      quantity: 0,
      heading: "Your next computer is not a computer",
      des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
    },
  ]);

  return (
    <div className="App">
      <Prod productsList={productList} />
      <ShoppingCart />
    </div>
  );
}

export default App;
