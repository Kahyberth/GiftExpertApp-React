import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import GifItem from "./GifItem";

export default function GifGrid({ category }: { category: string }) {
  const [images, setimages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const image = await getGif(category);
      setimages(image);
    };
    getImages();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
            images.map((image: { id: string; title: string; url: string }) => (
                <GifItem key={ image.id } { ...image } />
            ))
        }
      </div>
    </>
  );
}
