import { RouteNames } from "@/routing/routeNames";
import Application from "@/main";
import { Location } from "vue-router";
import { VueRouter } from "vue-router/types/router";

export default class RouteHelper {
  public static toHome(): Location {
    return { name: RouteNames.home, params: {} };
  }

  static getRouter(): VueRouter {
    return Application.$router;
  }

  static getCurrentRouteParams(): any {
    if (!Application) {
      return [];
    }
    return Application.$router.currentRoute.params;
  }

  static getCurrentParam(paramName: string): string {
    return this.getCurrentRouteParams()[paramName];
  }
}
