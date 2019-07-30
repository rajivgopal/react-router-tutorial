import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    ).then(response => response.json());

    setItems(items.items);
  };

  return (
    <div>
      {items.map(item => (
        <p key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default Shop;
