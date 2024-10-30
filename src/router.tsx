import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";

const FavoritesView = lazy(() => import("./views/FavoritesView"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route
            path="/favoritos"
            element={<Suspense fallback="Cargando...">
              <FavoritesView />
            </Suspense>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
