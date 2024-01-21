import GifItem from "./GifItem";
import useFetch from "../hooks/useFetch";

export default function GifGrid({ category }: { category: string }) {
  const { images, isLoading } = useFetch(category);


  return (
    <>
      <h3>{category}</h3>

      {isLoading && (
        <div className="loader">
          <div className="cell d-0"></div>
          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-2"></div>
          <div className="cell d-3"></div>

          <div className="cell d-3"></div>
          <div className="cell d-4"></div>
        </div>
      )}

      <div className="card-grid">
        {images.map((image: { id: string; title: string; url: string }) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
