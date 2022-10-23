import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'

import MainPage from "../screens/MainPage";
import AccountRecovery from "../screens/AccountRecovery";
import AccountRegistration from "../screens/AccountRegistration";
import Login from "../screens/Login";
import EditProfile from "../screens/EditProfile";
import EditSettings from "../screens/EditSettings";
import ProfileUser from "../screens/ProfileUser";
import DirectMessaging from "../screens/DirectMessaging";
import ProfileOfAnotherUser from "../screens/ProfileOfAnotherUser";
import FriendProfile from "../screens/FriendProfile";
import Friends from "../screens/Friends";
import CreateEvent from "../screens/CreateEvent";
import EventDetails from "../screens/EventDetails";

const screens = {
  Home: {
    screen: MainPage
  },
  RecoverAccount: {
    screen: AccountRecovery
  },
  Register: {
    screen: AccountRegistration
  },
  Login: {
    screen: Login
  },
  EditUserProfile: {
    screen: EditProfile
  },
  UserSettings: {
    screen: EditSettings
  },
  UserProfile: {
    screen: ProfileUser
  },
  Messaging: {
    screen: DirectMessaging
  },
  AnotherUserProfile: {
    screen: ProfileOfAnotherUser
  },
  ProfileOfFriend: {
    screen: FriendProfile
  },
  FriendsList: {
    screen: Friends
  },
  CreateEvent: {
    screen: CreateEvent
  },
  EventDetails: {
    screen: EventDetails
  }
}


const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)