import React, { lazy, Suspense } from "react";
import { Route } from "wouter";

import Loading from "components/Loading";

type RouteProps = {
  path: string;
  component: React.ComponentClass<any, any> | React.FC<any>;
};

let routes: RouteProps[] = [
  {
    path: "/",
    component: () => <h1>Hello</h1>
  },
  { path: "/login", component: lazy(() => import("views/Login")) },
  { path: "/users", component: lazy(() => import("views/Users")) },
  {
    path: "/users/add",
    component: lazy(() => import("views/Users/AddUserForm"))
  },
  { path: "/posts", component: lazy(() => import("views/Posts")) },
  { path: "/posts/add", component: lazy(() => import("views/Posts/AddPost")) }
];

let Views = () => (
  <Suspense fallback={<Loading />}>
    {routes.map(p => (
      <Route key={Math.random()} {...p} />
    ))}
  </Suspense>
);

export default Views;
