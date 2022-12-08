import * as React from "react";
import { Image, StyleSheet, Text, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';


const UpdatePassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.updatePasswordView}>
      <SafeAreaView style={styles.footerView}>
      <Pressable
          style={styles.singleTabPressable}
          onPress={() => navigation.navigate("ProfileUser")}
        >
          <SafeAreaView style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home3.png")}
            />
            <Text style={[styles.text, styles.mt2]}>Account</Text>
          </SafeAreaView>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable1}
          onPress={() => navigation.navigate("Friends")}
        >
          <SafeAreaView style={styles.iconAndText1}>
            <Image
              style={styles.userIcon}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
            <Text style={[styles.text1, styles.mt2]}>Friends</Text>
          </SafeAreaView>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable2}
          onPress={() => navigation.navigate("Map")}
        >
          <SafeAreaView style={styles.iconAndText2}>
            <Image
              style={styles.compassIcon}
              resizeMode="cover"
              source={require("../assets/compass.png")}
            />
            <Text style={[styles.text2, styles.mt2]}>Map</Text>
          </SafeAreaView>
        </Pressable>
        <Pressable
          style={styles.framePressable}
          onPress={() => navigation.navigate("CreateEvent")}
        >
          <Image
            style={styles.addEventCircle}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.addEventPlus}>+</Text>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable3}
          onPress={() => navigation.navigate("MainPage")}
        >
          <SafeAreaView style={styles.iconAndText3}>
            <Image
              style={styles.searchIcon}
              resizeMode="cover"
              source={require("../assets/search4.png")}
            />
            <Text style={[styles.text4, styles.mt2]}>Events</Text>
          </SafeAreaView>
        </Pressable>
      </SafeAreaView>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("EditSettings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <SafeAreaView style={styles.textFieldPassword}>
            <Image
              style={styles.trailingIcon5}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText1}>
              <Image
                style={styles.leadingIcon5}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>New Password</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText1}>Enter new password</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.textFieldPasswordConfirm}>
            <Image
              style={styles.trailingIcon4}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText2}>
              <Image
                style={styles.leadingIcon4}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>New Password</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText2}>CONFIRM NEW PASSWORD</Text>
        </SafeAreaView>   
           
      <Pressable
        style={styles.buttonPressable}
        onPress={() => navigation.navigate("UpdatePassword")}
      >
        <Image
          style={styles.leadingIcon1}
          resizeMode="cover"
          source={require("../assets/leading-icon15.png")}
        />
        <Text style={[styles.mediumText1, styles.ml6]}>Update Password</Text>
        <Image
          style={[styles.trailingIcon1, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon11.png")}
        />
      </Pressable>
      <Text style={styles.updatePasswordText}>Update Password</Text>
      <Pressable
        style={styles.buttonPressable1}
        onPress={() => navigation.navigate("EditSettings")}
      >
        <Image
          style={styles.leadingIcon2}
          resizeMode="cover"
          source={require("../assets/leading-icon16.png")}
        />
        <Text style={[styles.mediumText2, styles.ml6]}>Account Settings</Text>
        <Image
          style={[styles.trailingIcon2, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon12.png")}
        />
      </Pressable>
      <Image
        style={styles.checkIcon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml6: {
    marginLeft: 6,
  },
  homeIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#1eabbb",
    textAlign: "center",
  },
  iconAndText: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -24,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  singleTabPressable: {
    position: "absolute",
    height: "82.35%",
    width: "21.33%",
    top: "17.65%",
    right: "0%",
    bottom: "0%",
    left: "78.67%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  userIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "center",
  },
  iconAndText1: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -21.97,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  compassIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "center",
  },
  iconAndText2: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -12.97,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  singleTabPressable1: {
    position: "absolute",
    height: "82.35%",
    width: "21.32%",
    top: "17.65%",
    right: "57.35%",
    bottom: "0%",
    left: "21.33%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  addEventCircle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "30%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  addEventPlus: {
    paddingTop: 20,
    position: "absolute",
    height: "47.46%",
    width: "49.15%",
    top: "27.12%",
    right: "25.42%",
    bottom: "25.42%",
    left: "53.42%",
    fontSize: 48,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
  },
  framePressable: {
    position: "absolute",
    top: 0,
    left: 158,
    width: 59,
    height: 59,
  },
  searchIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text4: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "center",
  },
  iconAndText3: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -20.5,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  singleTabPressable2: {
    position: "absolute",
    height: "82.35%",
    width: "21.32%",
    top: "17.65%",
    right: "21.35%",
    bottom: "0%",
    left: "57.33%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  singleTabPressable3: {
    position: "absolute",
    height: "82.35%",
    width: "21.33%",
    top: "17.65%",
    right: "78.67%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  footerView: {
    position: "absolute",
    top: Dimensions.get('window').height * 0.85,
    left: 0,
    width: Dimensions.get('window').width,
    height: 68,
  },
  icon: {
    height: "2.46%",
    width: "3.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "5.07%",
    top: "3.2%",
    right: "91.73%",
    bottom: "94.33%",
  },
  leadingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  mediumText: {
    position: "relative",
    fontSize: 8,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  trailingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonView: {
    position: "absolute",
    top: 365,
    left: 45,
    borderRadius: 4,
    backgroundColor: "#ff5858",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 128,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  leadingIcon1: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  mediumText1: {
    position: "relative",
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  trailingIcon1: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonPressable: {
    position: "absolute",
    top: 248,
    left: 47,
    borderRadius: 4,
    backgroundColor: "#aaebff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 128,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  trailingIcon5: {
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
  leadingIcon5: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
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
    color: "#9ad1d4",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  textFieldPassword: {
    position: "absolute",
    top: 124,
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
    width: 302,
    height: 40,
  },
  trailingIcon4: {
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
  leadingIcon4: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text2: {
    position: "relative",
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "left",
  },
  iconText2: {
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
  labelText2: {
    position: "absolute",
    top: -20,
    right: 0,
    left: 0,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  textFieldPasswordConfirm: {
    position: "absolute",
    top: 153,
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 2,
    width: 302,
    height: 40,
  },
  trailingIcon3: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: 124,
    right: 12,
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
  },
  leadingIcon3: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text3: {
    position: "relative",
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "left",
  },
  iconText3: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: 124,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  labelText3: {
    position: "absolute",
    top: -20,
    right: 0,
    left: 0,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  updatePasswordText: {
    position: "absolute",
    top: 15,
    left: 45,
    fontSize: 15,
    lineHeight: 25,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 250,
    height: 30,
  },
  leadingIcon2: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  mediumText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  trailingIcon2: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonPressable1: {
    position: "absolute",
    top: 68,
    left: 45,
    borderRadius: 4,
    backgroundColor: "#80ced7",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 150,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  checkIcon: {
    position: "absolute",
    top: 156,
    left: 39,
    borderRadius: 2,
    width: 16,
    height: 16,
  },
  updatePasswordView: {
    top: "4%",
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default UpdatePassword;
