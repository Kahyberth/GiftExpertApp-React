import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";


export default function useFetch( category : string ) {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState( true )

  useEffect(() => {
    const getImages = async () => {
      const image = await getGif( category );
      setimages(image);
      setisLoading(false)
    };
    getImages();
  }, [category]);

  return {
    isLoading,
    images,
  };

}
