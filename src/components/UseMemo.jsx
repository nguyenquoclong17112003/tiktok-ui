import React, { useState, useMemo } from "react";

// ! useMemo giúp tránh thực hiện các logic nào đó không thật sự cần thiết

export default function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProduct] = useState([]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setProduct((prev) => {
      return [
        ...prev,
        {
          name,
          price: +price, // ! Convert price -> Number
        },
      ];
    });
  };

  const total = useMemo(() => {
    const totalPrice = products.reduce((sum, val) => {
      return sum + val.price;
    }, 0);
    return totalPrice;
  }, [products]);

  return (
    <>
      <input
        style={{ display: "block" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKey}
      />
      <input
        style={{ display: "block" }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        onKeyUp={handleKey}
      />
      <button onClick={handleSubmit}>Submit</button>
      {products.map((product, index) => {
        return (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        );
      })}
      {total}
    </>
  );
}
