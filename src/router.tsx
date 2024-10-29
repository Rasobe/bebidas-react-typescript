import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import FavoritesView from "./views/FavoritesView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/favoritos" element={<FavoritesView />} />
      </Routes>
    </BrowserRouter>
  );
}
