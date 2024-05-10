import { useCatImage } from "../hooks/useCatImage.js";

export function Otro() {
  const { imageUrl } = useCatImage({ fact: "Cat" });
  console.log(imageUrl);
  return <>{imageUrl && <img src={imageUrl} />}</>;
}
