import React from 'react';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import { LogBox, StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/useAuth';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
