import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import FavoritesView from "./views/FavoritesView";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/favoritos" element={<FavoritesView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
