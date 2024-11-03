import React from "react";
import { useRoutes } from "react-router-dom";
import ROUTER from ".";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Album from "../pages/Album";
import Todo from "../pages/todo";
import PublicRoutes from "./PublicRouters";

// Import các trang cần thiết
// const Home = React.lazy(() => import("src/pages/ANONYMOUS/Home"));
// const Anbum = React.lazy(() => import("src/pages/ANONYMOUS/Anbum"));
// const Todo = React.lazy(() => import("src/pages/ANONYMOUS/Todo"));

// Component cho loading
function LazyLoadingComponent({ children }) {
  return (
    <React.Suspense
      fallback={
        <div className="loading-center" style={{ height: "100vh" }}>
          <div>Loading...</div>
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
}

// Cấu hình các route
const routes = [
    {
        element:(
            <LazyLoadingComponent>
              <PublicRoutes />
            </LazyLoadingComponent>
        ),
        children:[
            {
                path: ROUTER.HOME,
                element: (
                  <LazyLoadingComponent>
                    <Home />
                  </LazyLoadingComponent>
                ),
              },
              {
                path: ROUTER.ALBUM,
                element: (
                  <LazyLoadingComponent>
                    <Album />
                  </LazyLoadingComponent>
                ),
              },
              {
                path: ROUTER.TODO,
                element: (
                  <LazyLoadingComponent>
                    <Todo />
                  </LazyLoadingComponent>
                ),
              },
        ]
    },
  {
    path: "*",
    element: (
      <LazyLoadingComponent>
        <NotFound />
      </LazyLoadingComponent>
    ),
  },
];
const AppRouter = () => {
  const renderRouter = useRoutes(routes);
  return renderRouter;
};

export default AppRouter;