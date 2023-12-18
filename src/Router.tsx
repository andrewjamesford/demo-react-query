import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PokemonList,
});

const detailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: `/details/$id`,
  component: PokemonDetails,
});

const routeTree = rootRoute.addChildren([indexRoute, detailsRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProviderWrapper = () => <RouterProvider router={router} />;
