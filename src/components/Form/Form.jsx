import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addContact } from "../../redux/slices/sontactSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "number":
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number) {
      toast.error("Fill all fields", {
        theme: "colored",
      });
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number
        <input
          type="number"
          value={number}
          name="number"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
