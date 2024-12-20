import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../src/context/ThemeContext';

export default function basetab() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarLabelStyle: { fontWeight: 'bold', color: theme.colors.text }, // Hacer el texto de las pestañas más en negrita
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: t('Home'),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? '#bb4426' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="createpost"
        options={{
          title: t('createPost'),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={focused ? '#bb4426' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: t('profile'),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={focused ? '#bb4426' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="editprofile"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="editarpost"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="editarfoto"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="following"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="followers"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="postpublicado"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="userfound"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="userfoundcomment"
        options={{
          href: null, }}
      />
    </Tabs>
  );
}
