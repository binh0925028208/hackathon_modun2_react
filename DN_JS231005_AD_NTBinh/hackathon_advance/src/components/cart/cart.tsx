import React, { useState } from "react";
import "./cart.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { productsList } from "../product/product";
interface Product {
  name: string;
  price: number;
  image: string;
  stock: number;
  heading: string;
  des: string;
  quantity: number;
}
const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsList);

  const addQuantity = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    setProducts(updatedProducts);
  };

  const reduceQuantity = (index: number) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity--;
      setProducts(updatedProducts);
    }
  };

  const totalAmount = products.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0
  );

  return (
    <div className="Cart">
      <div className="cartModal">
        <h1>Cart</h1>
        <button className="closeBtn">
          <IoMdClose />
        </button>
        <table>
          <tr className="cartHeader">
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total price</th>
          </tr>
          {products.map((product, index) =>
            product.quantity > 0 ? (
              <tr key={index} className="productCartDetail">
                <td>{product.name}</td>
                <td className="productCartQuantity">
                  <button onClick={() => reduceQuantity(index)}>
                    <FaChevronLeft />
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => addQuantity(index)}>
                    <FaChevronRight />
                  </button>
                </td>
                <td> ${product.price}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ) : (
              []
            )
          )}
        </table>
        <div className="cartTotal">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>
        <div className="cartConfirmPay">
          <button className="purchaseBtn">Purchase</button>
          <button className="cancelBtn">Cancel</button>
        </div>
      </div>
      <div className="confirmModal">
        <div className="modalBox"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
