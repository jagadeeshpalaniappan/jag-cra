import React from "react";
import AppContainer from "./containers/AppContainer";
import { AppStateProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppStateProvider>
      <AppContainer />
    </AppStateProvider>
  );
}
