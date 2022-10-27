import * as React from "react";

import { useState } from "react";

import {
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";


import { Button, CheckBox, Icon } from "@rneui/themed";

import { useNavigation } from "@react-navigation/native";


const AccountRegistration = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.accountRegistrationView}>
      <SafeAreaView style={styles.createAccountView}>
        <ImageBackground
          style={styles.property1DefaultIcon}
          resizeMode="cover"
          source={require("../assets/property1default.png")}
        >
          <Text style={styles.pickUpText}>PickUp</Text>
          <SafeAreaView style={styles.textFieldLastName}>
            <Image
              style={styles.trailingIcon}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText}>
              <Image
                style={styles.leadingIcon}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>Last Name</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText}>Last Name</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.textFieldPassword}>
            <Image
              style={styles.trailingIcon1}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText1}>
              <Image
                style={styles.leadingIcon1}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>Password</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText1}>Enter your password</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.textFieldPasswordConfirm}>
            <Image
              style={styles.trailingIcon2}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText2}>
              <Image
                style={styles.leadingIcon2}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>Password</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText2}>CONFIRM YOUR PASSWORD</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.textFieldUsername}>
            <Image
              style={styles.trailingIcon3}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText3}>
              <Image
                style={styles.leadingIcon3}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>Username</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText3}>Enter your username</Text>
          </SafeAreaView>
          <Pressable
            style={styles.leftButtonPressable}
            onPress={() => navigation.navigate("MainPage")}
          >
            <SafeAreaView style={styles.iconAndText}>
              <Image
                style={styles.leadingIcon4}
                resizeMode="cover"
                source={require("../assets/leading-icon7.png")}
              />
              <Button 
                titleStyle={{
                    color: "white",
                    fontFamily: "GearUp",
                    fontSize: 12,
                    bottom: "11%",
                    right: "17%",
                }} 
                title="Register"
                color="#00060a"
              ></Button>
            </SafeAreaView>
          </Pressable>
          <SafeAreaView style={styles.textFieldFirstName}>
            <Image
              style={styles.trailingIcon4}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText4}>
              <Image
                style={styles.leadingIcon5}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>First Name</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText4}>First Name</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.textFieldEmail}>
            <Image
              style={styles.trailingIcon5}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <SafeAreaView style={styles.iconText5}>
              <Image
                style={styles.leadingIcon6}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <TextInput style={styles.input}>Email</TextInput>
            </SafeAreaView>
            <Text style={styles.labelText5}>Enter your email</Text>
          </SafeAreaView>
          
          <CheckBox
            title="I agree to pickup's terms and conditions"
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={{
              backgroundColor: 'rgba(0,0,0,0)',
              top: "72%",
              alignItems: "center",
            }}
            textStyle={{
              color: "#ffffff",
              fontFamily: "GearUp",
              fontSize: 10,
            }}
            checkedColor="#80ced7"
          />
        </ImageBackground>
      </SafeAreaView>
      <Pressable
        style={styles.cancelPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
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
  submitButton: {
    fontFamily: "GearUp",
    color: "#80ced7",
    top: 500,
  },
  pickUpText: {
    paddingTop: "15%",
    paddingLeft: "5%",
    position: "absolute",
    top: 40,
    left: 90,
    fontSize: 40,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
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
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#111",
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
  textFieldLastName: {
    top: "26%",
    left: "13%",
    position: "absolute",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
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
    lineHeight: 18,
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
    color: "#9ad1d4",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  textFieldPassword: {
    position: "absolute",
    top: "50%",
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
    width: 302,
    height: 40,
  },
  trailingIcon2: {
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
    top: "58%",
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
    top: "50%",
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
    top: "50%",
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
  textFieldUsername: {
    position: "absolute",
    top: "42%",
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
    width: 302,
    height: 40,
  },
  leadingIcon4: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text4: {
    position: "relative",
    right: "2%",
    bottom: "3%",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  iconAndText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
      {
        translateX: -46,
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
    width: "38.93%",
    top: "65.38%",
    right: "30.67%",
    left: "30.4%",
    backgroundColor: "#00060a",
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 1,
    height: 42,
    overflow: "hidden",
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
  leadingIcon5: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text5: {
    position: "relative",
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "left",
  },
  iconText4: {
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
  labelText4: {
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
  textFieldFirstName: {
    position: "absolute",
    top: "18%",
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
    width: 302,
    height: 40,
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
  leadingIcon6: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text6: {
    position: "relative",
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#111",
    textAlign: "left",
  },
  iconText5: {
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
  labelText5: {
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
  textFieldEmail: {
    position: "absolute",
    top: "34%",
    left: "13%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#9ad1d4",
    borderWidth: 2,
    width: 302,
    height: 40,
  },
  rectangleIcon: {
    position: "absolute",
    top: "72%",
    left: "9%",
    width: 19,
    height: 19,
  },
  iAgreeToThePickUpTermsAn: {
    position: "absolute",
    top: "72%",
    left: "16%",
    fontSize: 9,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  cREATEANACCOUNT: {

    paddingTop: "9%",
    paddingLeft: "5%",
    position: "absolute",
    top: 79,
    left: 109,
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  property1DefaultIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    overflow: "hidden",
  },
  createAccountView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 415,
    height: 1684,
    overflow: "hidden",
  },
  cancelText: {
    paddingTop: "4%",
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  cancelPressable: {
    position: "absolute",
    left: 166,
    top: 704,
  },
  accountRegistrationView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 847,
  },
});

export default AccountRegistration;
