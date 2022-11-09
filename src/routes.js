import { createBrowserRouter } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components";
import { Album, Artist, Home,Login, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/artist',
        element: <Artist />
      },
      {
        path: '/album',
        element: <Album />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;