const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountRecovery"
              component={AccountRecovery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountRegistration"
              component={AccountRegistration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditSettings"
              component={EditSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileUser"
              component={ProfileUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DirectMessaging"
              component={DirectMessaging}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileOfAnotherUser"
              component={ProfileOfAnotherUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendProfile"
              component={FriendProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Friends"
              component={Friends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateEvent"
              component={CreateEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventDetails"
              component={EventDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
