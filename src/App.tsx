// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home/Home";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import NotFound from "./pages/NotFound/NotFound";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="transactions"
        element={<TransactionsPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFound />} errorElement={<ErrorPage />} />
    </Route>
  ),
  { basename: "/money-flow/" }
);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
