import React, { createContext, useContext, useReducer } from "react";

// data:
const BOOKS = [{ id: "101", name: "Book 1" }];

export const AppContext = createContext();
export const useAppState = () => useContext(AppContext);

export const Actions = { ADD_BOOK: "ADD_BOOK", DELETE_BOOK: "DELETE_BOOK" };

const appStateReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_BOOK: {
      const nextBookId = state.nextBookId + 1;
      return {
        ...state,
        nextBookId,
        books: [...state.books, { ...action.item, id: nextBookId }]
      };
    }
    case Actions.DELETE_BOOK: {
      console.log("AppState:: DELETE_BOOK: action:", action, !!action.item);
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.item.id)
      };
    }
    default:
      return state;
  }
};

const initialState = {
  books: BOOKS,
  nextBookId: BOOKS.length + 100
};

export function AppStateProvider({ children }) {
  const [appState, dispatch] = useReducer(appStateReducer, initialState);
  return (
    <AppContext.Provider value={[appState, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
