import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const ItemDetail = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  if (!item) {
    return (
      <div>
        <h1>item not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>კატეგორია: {item.category}</p>
      <p>
        ფასი: {item.price} {item.currency}
      </p>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
