import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout.jsx";

// pages
import Home from "./pages/Home/Home.jsx";
import TransactionList from "./pages/TransactionList/TransactionList.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="transactions"
        element={<TransactionList />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFound />} errorElement={<ErrorPage />} />
    </Route>
  ),
  { basename: "/money-flow/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
