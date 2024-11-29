/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/createpost` | `/(tabs)/editarfoto` | `/(tabs)/editarpost` | `/(tabs)/editprofile` | `/(tabs)/favoritos` | `/(tabs)/home` | `/(tabs)/perfil` | `/(tabs)/postpublicado` | `/(tabs)/search` | `/(tabs)/seguidores` | `/(tabs)/seguidos` | `/(tabs)/settings` | `/(tabs)/userfound` | `/(tabs)/userfoundcomment` | `/_sitemap` | `/createpost` | `/editarfoto` | `/editarpost` | `/editprofile` | `/error/internetConnection` | `/error/server` | `/favoritos` | `/forgotPassword` | `/forgotPassword/otp` | `/forgotPassword/recovered` | `/forgotPassword/resetPassword` | `/home` | `/login` | `/perfil` | `/postpublicado` | `/screens/login` | `/screens/login/forgotpass` | `/screens/login/login` | `/screens/login/loginotp` | `/screens/login/passreset` | `/screens/login/recovered` | `/screens/login/signingoogle` | `/screens/register/chooseuser` | `/screens/register/otp` | `/screens/register/personalinfo` | `/screens/register/register` | `/screens/register/welcome` | `/screens/search` | `/screens/startScreen` | `/search` | `/search/search` | `/seguidores` | `/seguidos` | `/settings` | `/signup` | `/signup/chooseUser` | `/signup/otp` | `/signup/userInformation` | `/signup/welcome` | `/startScreen` | `/userfound` | `/userfoundcomment`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
