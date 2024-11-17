/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/createpost` | `/(tabs)/home` | `/(tabs)/perfil` | `/(tabs)/settings` | `/..\components\InfoMessage` | `/_sitemap` | `/createpost` | `/error/internetConnection` | `/error/server` | `/forgotPassword` | `/forgotPassword/otp` | `/forgotPassword/recovered` | `/forgotPassword/resetPassword` | `/home` | `/login` | `/perfil` | `/search/search` | `/settings` | `/signup` | `/signup/chooseUser` | `/signup/otp` | `/signup/userInformation` | `/signup/welcome` | `/startScreen`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
