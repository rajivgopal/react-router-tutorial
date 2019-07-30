import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    const fetchItem = async () => {
      const data = await fetch(
        `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
          match.params.id
        }`
      ).then(response => response.json());
      setItem(data);
    };

    fetchItem();
  }, [match]);

  const [item, setItem] = useState({
    images: []
  });

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt="" />
    </div>
  );
}

export default Item;
