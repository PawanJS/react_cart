import React from "react";

export const ProductCard = ({
  data,
  cartItems,
  setCartItems,
  cartCount,
  setCartCount,
}) => {
  const addToCart = (data) => {
    setCartCount(cartCount + 1);
    const check = cartItems.every((item) => {
      return item.id !== data.id;
    });

    if (check) {
      setCartItems([...cartItems, data]);
    } else {
      const newCartItem = cartItems.filter((item) => item.id === data.id);
      newCartItem.map((item) => ++item.quantity);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card text-black">
        <img
          src={data.image}
          style={{ maxHeight: "200px", objectFit: "contain" }}
          className="card-img-top p-4"
          alt={data.title}
        />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">{data.title}</h5>
            <p className="text-muted">{data.category}</p>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Price</span>
            <span>${data.price}</span>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Rating</span>
              <span>{`${data.rating.rate}/${data.rating.count}`}</span>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(data);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
