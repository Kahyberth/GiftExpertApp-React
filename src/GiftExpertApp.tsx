import { useState } from "react";
import AddCategory from "./components/AddCategory";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Sousou no Frieren",
    "Jujutsu Kaisen",
  ]);

  const handleAdd = ( newValue : string ) => {
    const isAlreadyIn = categories.find((e) => e.toLowerCase() === newValue.toLowerCase());
    if (isAlreadyIn) return;
    setCategories([...categories, newValue]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory onNewValue={ handleAdd } />
      <ol>
        {categories.map((e) => {
          return <li key={ e } >{ e }</li>;
        })}
      </ol>
    </>
  );
}
