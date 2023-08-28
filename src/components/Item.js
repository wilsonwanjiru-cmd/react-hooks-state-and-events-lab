import React, { useState } from "react";

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(prevStatus => !prevStatus);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <button onClick={toggleCartStatus} className="add">
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

