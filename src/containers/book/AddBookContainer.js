import React, { useState } from "react";
import { useAppState, Actions } from "../../context/AppContext";

export default function AddBookContainer() {
  const [, dispatch] = useAppState();
  const [state, setstate] = useState({ bookName: "" });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("AddBookContainer: handleAddBook:", state);
    dispatch({ type: Actions.ADD_BOOK, item: { name: state.bookName } });
    setstate({ ...state, bookName: "" });
  };

  return (
    <div>
      <h6>Add Book:</h6>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            value={state.bookName}
            onChange={e => setstate({ ...state, bookName: e.target.value })}
          />
          <button type="submit">+ Add</button>
        </div>
      </form>
    </div>
  );
}
