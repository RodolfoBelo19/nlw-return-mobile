import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import SplashScreen from 'expo-splash-screen'
import { Widget } from './src/components/Widget';
import { theme } from './src/theme';

import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium 
 } from '@expo-google-fonts/inter';
 
import { useCallback } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={{ 
        flex: 1,
        backgroundColor: theme.colors.background
      }}
      >
        <StatusBar
          style="light"
          backgroundColor="transparent"
          translucent
        />
        
        <Widget/>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
