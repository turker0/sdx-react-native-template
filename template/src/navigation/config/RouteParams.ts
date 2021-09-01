import RouteNames from './RouteNames';

type ValuableParams = {
  [RouteNames.Auth]: {
    user?: string;
  };
};

type DefaultParams = {[key in RouteNames]: {} | undefined};

export type RouteParams = DefaultParams & ValuableParams;
