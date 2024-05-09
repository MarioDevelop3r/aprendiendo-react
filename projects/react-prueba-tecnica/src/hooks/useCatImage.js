import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const threeFirstWord = fact.split(" ", 3).join(" ");
    console.log(threeFirstWord);

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { _id } = data;
        setImageUrl(
          `${_id}/says/${threeFirstWord}?fontSize=50&fontColor=white`
        );
      });
  }, [fact]);
  return { imageUrl };
}
