import React, { useState, useEffect } from "react";
import BookList from "../../components/book/BookList";
import { useAppState, Actions } from "../../context/AppContext";
import SearchInput from "../../components/SearchInput";
import AddBookContainer from "./AddBookContainer";

function BookContainer() {
  const [appState, dispatch] = useAppState();
  const [booksState, setBooksState] = useState(appState.books);

  console.log("BookContainer: appState, booksState:", appState, booksState); // TODO: why calling two times?

  useEffect(() => {
    console.log("BookContainer: appState.books changed:", appState.books);
    setBooksState(appState.books);
  }, [appState, setBooksState]);

  const handleSearch = keyword => {
    const books = keyword
      ? appState.books.filter(book =>
          book.name.toLowerCase().startsWith(keyword.toLowerCase())
        )
      : appState.books;

    console.log("BookContainer: handleSearch: keyword, books", keyword, books);
    setBooksState(books);
  };

  const handleDelete = book => {
    dispatch({ type: Actions.DELETE_BOOK, item: book });
  };

  return (
    <div>
      <h3>Books:</h3>
      <SearchInput onChange={handleSearch} />
      <BookList items={booksState} onDelete={handleDelete} />
      <AddBookContainer />
    </div>
  );
}

export default BookContainer;
