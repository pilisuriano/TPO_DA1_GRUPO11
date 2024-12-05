/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/createpost` | `/(tabs)/editarfoto` | `/(tabs)/editarpost` | `/(tabs)/editprofile` | `/(tabs)/favorites` | `/(tabs)/followers` | `/(tabs)/following` | `/(tabs)/home` | `/(tabs)/perfil` | `/(tabs)/postpublicado` | `/(tabs)/search` | `/(tabs)/settings` | `/(tabs)/userfound` | `/(tabs)/userfoundcomment` | `/_sitemap` | `/createpost` | `/editarfoto` | `/editarpost` | `/editprofile` | `/error/internetConnection` | `/error/server` | `/favorites` | `/followers` | `/following` | `/forgotPassword` | `/forgotPassword/otp` | `/forgotPassword/recovered` | `/forgotPassword/resetPassword` | `/home` | `/login` | `/perfil` | `/postpublicado` | `/search` | `/search/search` | `/settings` | `/signup` | `/signup/chooseUser` | `/signup/otp` | `/signup/userInformation` | `/signup/welcome` | `/startScreen` | `/userfound` | `/userfoundcomment`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
