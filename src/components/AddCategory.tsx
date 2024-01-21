import { useState } from "react";

export default function AddCategory({
  onNewValue,
}: {
  onNewValue: (newValue: string) => void;
}) {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = ({ target }: { target: { value: string } }) => {
    console.log(target.value);
    setinputValue(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    
    onNewValue(newInputValue);
    setinputValue("");
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
