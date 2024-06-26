import type { Route } from '@lifi/sdk';

export interface RouteExecutionStore {
  routes: Partial<Record<string, RouteExecution>>;
  setExecutableRoute: (route: Route) => void;
  updateRoute: (route: Route) => void;
  restartRoute: (routeId: string) => void;
  deleteRoute: (routeId: string) => void;
  deleteRoutes: (type: 'completed' | 'active') => void;
}

export enum RouteExecutionStatus {
  Idle = 0,
  Pending = 1 << 0,
  Done = 1 << 1,
  Failed = 1 << 2,
  Partial = 1 << 3,
  Refunded = 1 << 4,
}

export interface RouteExecution {
  route: Route;
  status: RouteExecutionStatus;
}

export interface RecommendedRouteStore {
  recommendedRoute?: Route;
  setRecommendedRoute: (route?: Route) => void;
}
