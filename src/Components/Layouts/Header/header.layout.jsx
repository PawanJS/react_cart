import React, { useState } from 'react';

export const Header = ({
  cartItems,
  setCartItems,
  cartCount,
  setCartCount,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState();

  const cartItemsTotal = (item) => {
    const total = item.reduce(
      (total, { price = 0, quantity = item.quantity }) =>
        total + quantity * price,
      0
    );
    setCartTotal(total);
  };

  const closeCartPopup = () => {
    setShowCart(false);
  };

  const openCartPopup = () => {
    setShowCart(true);
    cartItemsTotal(cartItems);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    const count = cartCount - item.quantity;

    if (cartCount !== 0) setCartCount(count);
    setCartItems(newCartItems);
    cartItemsTotal(newCartItems);
    item.quantity = 1;
  };

  return (
    <div className=" bg-light p-3">
      <div className="container  d-flex justify-content-between">
        <div>Cart</div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={openCartPopup}
        >
          {cartCount}
        </button>
      </div>
      {showCart && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog" style={{ maxWidth: '900px' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeCartPopup}
                ></button>
              </div>
              <div className="modal-body">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="mb-3 p-2 bg-light d-flex align-items-center justify-content-between gap-2"
                  >
                    <p className="m-0">{item.title}</p>
                    <p className="m-0">{item.quantity}</p>
                    <p className="m-0">${item.price * item.quantity}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <div>Total</div>
                <div>${cartTotal}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
