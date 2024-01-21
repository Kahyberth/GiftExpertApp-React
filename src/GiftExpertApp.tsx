import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "The Witcher",
  ]);

  const handleAdd = (newValue: string) => {
    const isAlreadyIn = categories.find(
      (e) => e.toLowerCase() === newValue.toLowerCase()
    );
    if (isAlreadyIn) return;
    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory onNewValue={handleAdd} />

      {categories.map((category: string) => (
      
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
