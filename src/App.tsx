import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import { ContextProductsCount } from "./utils/context-filter";

export default function App() {
  const [contextProductsCount, setContextProductsCount] = useState<number>(0);

  return (
    <ContextProductsCount.Provider
      value={{ contextProductsCount, setContextProductsCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProductsCount.Provider>
  );
}
