
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import all of our Screens
import MainPage from "./screens/MainPage";
import AccountRecovery from "./screens/AccountRecovery";
import AccountRegistration from "./screens/AccountRegistration";
import Login from "./screens/Login";
import EditProfile from "./screens/EditProfile";
import EditSettings from "./screens/EditSettings";
import ProfileUser from "./screens/ProfileUser";
import DirectMessaging from "./screens/DirectMessaging";
import ProfileOfAnotherUser from "./screens/ProfileOfAnotherUser";
import FriendProfile from "./screens/FriendProfile";
import Friends from "./screens/Friends";
import CreateEvent from "./screens/CreateEvent";
import EventDetails from "./screens/EventDetails";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false); //State to determine if our app is ready or not

  useEffect(() => {
    async function prepare() {
      try {
        // Let's load our fonts, using Font.loadAsync
        await Font.loadAsync({
          'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
          'Calibri': require('./assets/fonts/Calibri.otf'),
          'Arsenal': require('./assets/fonts/Arsenal.otf'),
          'GearUp': require('./assets/fonts/GearUp.otf'),
          'GearUp Soft': require('./assets/fonts/GearUp.otf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      console.log("Is the app ready?", appIsReady)
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="AccountRecovery" component={AccountRecovery} options={{ headerShown: false }} />
          <Stack.Screen name="AccountRegistration" component={AccountRegistration} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
          <Stack.Screen name="EditSettings" component={EditSettings} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileUser" component={ProfileUser} options={{ headerShown: false }} />
          <Stack.Screen name="DirectMessaging" component={DirectMessaging} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileOfAnotherUser" component={ProfileOfAnotherUser} options={{ headerShown: false }} />
          <Stack.Screen name="FriendProfile" component={FriendProfile} options={{ headerShown: false }} />
          <Stack.Screen name="Friends" component={Friends} options={{ headerShown: false }} />
          <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ headerShown: false }} />
          <Stack.Screen name="EventDetails" component={EventDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}