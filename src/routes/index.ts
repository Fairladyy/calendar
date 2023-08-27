import React from "react";
import EventPage from "../pages/EventPage";
import LoginPage from "../pages/LoginPage";

export interface IRoute {
  path: string;
  component: React.ComponentType | null;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/event",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: LoginPage },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: EventPage },
];
