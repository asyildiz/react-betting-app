import React from "react";
import { BasketProvider } from "./context";
import { FixtureListing } from "./pages";
import "./App.scss";

function App() {
  return (
    <BasketProvider>
      <FixtureListing />
    </BasketProvider>
  );
}

export default App;
