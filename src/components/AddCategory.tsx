import { useState } from "react";

export default function AddCategory({
  handleCategories,
}: {
  handleCategories: string[];
}) {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = ({ target }: { target: { value: string } }) => {
    console.log(target.value);
    setinputValue(target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    handleCategories((category) => [...category, inputValue]);
    setinputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="textInputWrapper">
        <input
          placeholder="Search Gift"
          type="text"
          className="textInput"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </div>
    </form>
  );
}
