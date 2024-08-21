import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect } from "react";

const RootLayout = () => {

    let [fontsLoaded, error] = useFonts({
        Roboto_700Bold,
      });
    
      useEffect(() => {
        if (error) throw error;
    
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
    

      if (!fontsLoaded) {
        return null;
      }
    
    

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout;