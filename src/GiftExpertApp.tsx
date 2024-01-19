import { useState } from "react";
import AddCategory from "./components/AddCategory";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Sousou no Frieren",
    "Jujutsu Kaisen",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Naruto"]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory handleCategories={ setCategories } />
      <ol>
        {categories.map((e) => {
          return <li key={ e } >{ e }</li>;
        })}
      </ol>

      <button className='button_top' onClick={ handleAdd }>Add</button>
    </>
  );
}
