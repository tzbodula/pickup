import { useState, React } from "react"; 

import {
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import { Button } from "@rneui/themed";
import { Storage } from 'expo-storage'

import { Video, AVPlaybackStatus } from 'expo-av';


import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {LOCAL_IP} from '@env';
const Login = () => {

  
  const navigation = useNavigation();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const updateUsername = (event) => {
    setUsername(event)
  }

  const updatePassword = (event) => {
    setPassword(event)
  }

  const handleSubmit = () => {
    fetch(`http://${LOCAL_IP}:3000/user/login`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'},
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }).then((res) => {return res.json()})
    .then((data) => {
      if (data.status == 200) {
        console.log(data)
        Storage.setItem({key: 'account_id', value: JSON.stringify(data.account_id)}
        ).then(
          navigation.navigate("MainPage")
        ).catch((e) => console.log(e))
      }
    }).catch((e) => console.log(e))

  }


  return (
    <SafeAreaView style={styles.loginView2}>
      <SafeAreaView style={styles.loginView}>
        <Video
            source={require('../assets/pickup-trailer1.mp4')}
            style={styles.property1DefaultIcon}
            resizeMode="stretch"
            shouldPlay
            isLooping
        />
          <Pressable
            style={styles.forgotPasswordPressable}
            onPress={() => navigation.navigate("AccountRecovery")}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>
          <Pressable
            style={styles.createNewAccount1}
            onPress={() => navigation.navigate("AccountRegistration")}
          >
            <Text style={styles.createNewAccount}>Create new account</Text>
          </Pressable>
          <Image source={require("../assets/pickup-logo-wordmark.png")} style={{ width: "55%", height: "20%", position: "absolute", left: "22%", top: "1%" }} />
          <Text style={styles.loginToYourAccount}>Login to your account</Text>
          <SafeAreaView style={styles.emailInputLogin1}>
            <SafeAreaView style={styles.emailInputLogin}>
              <Image
                style={styles.trailingIcon}
                resizeMode="cover"
                source={require("../assets/trailing-icon.png")}
              />
              <SafeAreaView style={styles.iconText}>
                <Image
                  style={styles.leadingIcon}
                  resizeMode="cover"
                  source={require("../assets/leading-icon2.png")}
                />
                <TextInput style={[styles.text, styles.ml8]} onChangeText={updateUsername} maxLength={40} placeholder="Email or username" placeholderTextColor="#000000"></TextInput>
              </SafeAreaView>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.passwordLoginInput1}>
            <SafeAreaView style={styles.passwordLoginInput}>
              <Image
                style={styles.trailingIcon1}
                resizeMode="cover"
                source={require("../assets/trailing-icon.png")}
              />
              <SafeAreaView style={styles.iconText1}>
                <Image
                  style={styles.leadingIcon1}
                  resizeMode="cover"
                  source={require("../assets/leading-icon2.png")}
                />
                <TextInput style={[styles.text1, styles.ml8]} onChangeText={updatePassword} maxLength={30} placeholder="Password" placeholderTextColor="#000000"></TextInput>
              </SafeAreaView>
            </SafeAreaView>
          </SafeAreaView>

      </SafeAreaView>

      <SafeAreaView style={styles.loginView1}>
        <Pressable
          style={styles.leftButtonPressable}
          onPress={handleSubmit}
        >
          <Text style={{color: "#000000", fontFamily: "GearUp", fontSize: 20, position: "absolute", left: "23%", top: "10%"}}>Login</Text>
        </Pressable>
      </SafeAreaView>
      <Image
        style={{top: 600}}
        resizeMode="cover"
        source={require("../assets/pickup-logo.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  forgotPasswordPressable: {
    position: "absolute",
    left: 108,
    top: 370,
  },
  createNewAccount: {
    fontSize: 11,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  createNewAccount1: {
    position: "absolute",
    left: 106,
    top: 406,
  },
  pickUpText: {
    position: "absolute",
    paddingTop: "18%",
    top: "5%",
    left: "27%",
    fontSize: 40,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
  },
  loginToYourAccount: {
    position: "absolute",
    top: "15%",
    left: "30%",
    fontSize: 9,
    fontStyle: "italic",
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  trailingIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
  },
  leadingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000000",
    textAlign: "left",
  },
  iconText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  labelText: {
    position: "absolute",
    top: -20,
    right: 0,
    left: 0,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  emailInputLogin: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "65%",
    right: "0%",
    bottom: "0%",
    left: "5%",
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 2,
  },
  emailInputLogin1: {
    position: "absolute",
    top: 140,
    left: 41,
    width: 302,
    height: 40,
  },
  trailingIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
  },
  leadingIcon1: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text1: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "left",
  },
  iconText1: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  labelText1: {
    position: "absolute",
    top: -20,
    right: 0,
    left: 0,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  passwordLoginInput: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "65%",
    right: "0%",
    bottom: "0%",
    left: "5%",
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 2,
  },
  passwordLoginInput1: {
    
    position: "absolute",
    top: 217,
    left: 41,
    width: 302,
    height: 40,
  },
  property1DefaultIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    overflow: "hidden",
  },
  loginView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    overflow: "hidden",
  },
  bgView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "rgba(206, 210, 217, 0.7)",
  },
  bgView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "90.67%",
    left: "0.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText1: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    width: "8.27%",
    top: 116,
    right: "75.93%",
    left: "15.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText2: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    width: "8.27%",
    top: 116,
    right: "65.93%",
    left: "25.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText3: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    width: "8.27%",
    top: 116,
    right: "55.93%",
    left: "35.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText4: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    width: "8.53%",
    top: 116,
    right: "45.67%",
    left: "45.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText5: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    width: "8.53%",
    top: 116,
    right: "35.67%",
    left: "55.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView7: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText6: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    width: "8.53%",
    top: 116,
    right: "25.67%",
    left: "65.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView8: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText7: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    width: "8.53%",
    top: 116,
    right: "15.67%",
    left: "75.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView9: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText8: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    width: "8.27%",
    top: 62,
    right: "85.93%",
    left: "5.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView10: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText9: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    width: "8.27%",
    top: 62,
    right: "75.93%",
    left: "15.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView11: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText10: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    width: "8.27%",
    top: 62,
    right: "65.93%",
    left: "25.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView12: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText11: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "55.67%",
    left: "35.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView13: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText12: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "45.67%",
    left: "45.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView14: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText13: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "35.67%",
    left: "55.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView15: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText14: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "25.67%",
    left: "65.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView16: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText15: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "15.67%",
    left: "75.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView17: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText16: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    width: "8.53%",
    top: 62,
    right: "5.67%",
    left: "85.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView18: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText17: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "80.67%",
    left: "10.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView19: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText18: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "70.67%",
    left: "20.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView20: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText19: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "60.71%",
    left: "30.75%",
    borderRadius: 5,
    height: 43,
  },
  bgView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText20: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "50.67%",
    left: "40.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView22: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText21: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "40.67%",
    left: "50.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView23: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText22: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "30.67%",
    left: "60.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView24: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText23: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    width: "8.27%",
    top: 8,
    right: "20.93%",
    left: "70.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView25: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText24: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    width: "8.27%",
    top: 8,
    right: "10.93%",
    left: "80.8%",
    borderRadius: 5,
    height: 43,
  },
  bgView26: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText25: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "Be Vietnam Pro",
    color: "#000",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    width: "8.53%",
    top: 8,
    right: "0.8%",
    left: "90.67%",
    borderRadius: 5,
    height: 43,
  },
  iPhoneXPortraitConte: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 161,
    overflow: "hidden",
  },
  homeIndicatorView: {
    position: "absolute",
    transform: [
      {
        translateX: -67,
      },
    ],
    bottom: 8,
    left: "50%",
    borderRadius: 3,
    backgroundColor: "#000",
    width: 133,
    height: 6,
  },
  micIcon: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  emojisIcon: {
    position: "absolute",
    bottom: 18,
    left: 18,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  buttonIconSmall: {
    position: "absolute",
    width: "11.26%",
    right: "0.74%",
    bottom: 132,
    left: "88%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 43,
  },
  shiftIcon: {
    position: "absolute",
    width: "11.26%",
    right: "87.94%",
    bottom: 131,
    left: "0.8%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 44,
  },
  bgView27: {
    position: "absolute",
    top: 0,
    right: 0.4,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText26: {
    position: "absolute",
    transform: [
      {
        translateY: -10.5,
      },
    ],
    top: "50%",
    right: 0.4,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.3,
    fontFamily: "Allison",
    color: "#000",
    textAlign: "center",
  },
  spaceView: {
    position: "absolute",
    width: "48.53%",
    right: "25.87%",
    bottom: 78,
    left: "25.6%",
    borderRadius: 5,
    height: 43,
  },
  backgroundSecondaryBG: {
    position: "absolute",
    top: 0,
    right: -0.38,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#aeb3be",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText27: {
    position: "absolute",
    transform: [
      {
        translateY: -10.5,
      },
    ],
    top: "50%",
    right: -0.38,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.3,
    fontFamily: "Allison",
    color: "#000",
    textAlign: "center",
  },
  returnView: {
    position: "absolute",
    width: "23.2%",
    right: "0.8%",
    bottom: 78,
    left: "76%",
    borderRadius: 5,
    height: 43,
  },
  backgroundSecondaryBG1: {
    position: "absolute",
    top: 0,
    right: -0.38,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#aeb3be",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  letterText28: {
    position: "absolute",
    transform: [
      {
        translateY: -10.5,
      },
    ],
    top: "50%",
    right: -0.38,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.3,
    fontFamily: "Allison",
    color: "#000",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    width: "23.2%",
    right: "76%",
    bottom: 78,
    left: "0.8%",
    borderRadius: 5,
    height: 43,
  },
  iPhoneXPortraitInput: {
    position: "absolute",
    top: 113,
    right: 0,
    left: 0,
    height: 178,
    overflow: "hidden",
  },
  loginCreateAccountElement: {
    position: "absolute",
    top: 556,
    left: 13,
    width: 382,
    height: 273,
    overflow: "hidden",
  },
  leadingIcon2: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  iconAndText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: -32,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  leftButtonPressable: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "5%",
    bottom: "13.04%",
    left: "0%",
    borderColor: "#80ced7",
    borderWidth: 3,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    overflow: "hidden",
  },
  loginView1: {
    position: "absolute",
    top: 309,
    left: 128,
    width: 150,
    height: 46,
  },
  loginView2: {
    position: "relative",
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Login;
