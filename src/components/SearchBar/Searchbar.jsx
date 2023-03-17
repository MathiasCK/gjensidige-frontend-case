import React, {useState} from "react";

import FormInput from "./FormInput";
import "./searchbar.scss";

const TodoAdder = () => {
  const [inputValue, setInputValue] = useState("");
  //const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   addTodoAction({
    //     id: uuidv4(),
    //     text: inputValue,
    //     isComplete: false,
    //   }),
    // );

    setInputValue("");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="add"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        label="Search for any pokemon"
        required
      />
      <button className="searchbar__button">Submit</button>
    </form>
  );
};

export default TodoAdder;
