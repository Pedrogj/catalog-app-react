import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <AppRouter />
    </DataContextProvider>
  );
}

export default App;
