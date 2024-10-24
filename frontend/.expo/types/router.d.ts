/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/perfil` | `/(tabs)/search` | `/_sitemap` | `/home` | `/perfil` | `/screens/login` | `/screens/login/forgotpass` | `/screens/login/login` | `/screens/login/passreset` | `/screens/login/recovered` | `/screens/login/signingoogle` | `/screens/register/chooseuser` | `/screens/register/otp` | `/screens/register/personalinfo` | `/screens/register/register` | `/screens/register/welcome` | `/screens/search` | `/search`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
