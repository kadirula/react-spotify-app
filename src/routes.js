import { createBrowserRouter } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components";
import { Album, AlbumDetail, Artist, ArtistDetail, Home, Search, Login, NotFound, PlaylistDetail, User, Error } from "./pages";

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
        path: '/artists/:type',
        element: <Artist />
      },
      {
        path: '/artist/:id',
        element: <ArtistDetail />
      },
      {
        path: '/album/:id',
        element: <AlbumDetail />
      },
      {
        path: '/playlist/:id',
        element: <PlaylistDetail />
      },
      {
        path: '/albums',
        element: <Album />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/user/:id',
        element: <User />
      },
      {
        path: '/error',
        element: <Error />
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