import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function basetab() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? '#bb4426' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="createpost"
        options={{
          title: 'Crear Post',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={focused ? '#bb4426' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
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
        name="seguidos"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="seguidores"
        options={{
          href: null, }}
      />
      <Tabs.Screen
        name="favoritos"
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
