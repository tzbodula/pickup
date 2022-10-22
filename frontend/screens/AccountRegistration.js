import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountRegistration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountRegistrationView}>
      <View style={styles.createAccountView}>
        <ImageBackground
          style={styles.property1DefaultIcon}
          resizeMode="cover"
          source={require("../assets/property1default.png")}
        >
          <Text style={styles.pickUpText}>PickUp</Text>
          <View style={styles.textFieldView}>
            <Image
              style={styles.trailingIcon}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText}>
              <Image
                style={styles.leadingIcon}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text, styles.ml8]}>Last Name</Text>
            </View>
            <Text style={styles.labelText}>Last Name</Text>
          </View>
          <View style={styles.textFieldView1}>
            <Image
              style={styles.trailingIcon1}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText1}>
              <Image
                style={styles.leadingIcon1}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text1, styles.ml8]}>Password</Text>
            </View>
            <Text style={styles.labelText1}>Enter your password</Text>
          </View>
          <View style={styles.textFieldView2}>
            <Image
              style={styles.trailingIcon2}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText2}>
              <Image
                style={styles.leadingIcon2}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text2, styles.ml8]}>Password</Text>
            </View>
            <Text style={styles.labelText2}>CONFIRM YOUR PASSWORD</Text>
          </View>
          <View style={styles.textFieldView3}>
            <Image
              style={styles.trailingIcon3}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText3}>
              <Image
                style={styles.leadingIcon3}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text3, styles.ml8]}>Username</Text>
            </View>
            <Text style={styles.labelText3}>Enter your username</Text>
          </View>
          <Pressable
            style={styles.leftButtonPressable}
            onPress={() => navigation.navigate("MainPage")}
          >
            <View style={styles.iconAndText}>
              <Image
                style={styles.leadingIcon4}
                resizeMode="cover"
                source={require("../assets/leading-icon7.png")}
              />
              <Text style={[styles.text4, styles.ml4]}>Register</Text>
            </View>
          </Pressable>
          <View style={styles.textFieldView4}>
            <Image
              style={styles.trailingIcon4}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText4}>
              <Image
                style={styles.leadingIcon5}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text5, styles.ml8]}>First Name</Text>
            </View>
            <Text style={styles.labelText4}>First Name</Text>
          </View>
          <View style={styles.textFieldView5}>
            <Image
              style={styles.trailingIcon5}
              resizeMode="cover"
              source={require("../assets/trailing-icon.png")}
            />
            <View style={styles.iconText5}>
              <Image
                style={styles.leadingIcon6}
                resizeMode="cover"
                source={require("../assets/leading-icon3.png")}
              />
              <Text style={[styles.text6, styles.ml8]}>Email</Text>
            </View>
            <Text style={styles.labelText5}>Enter your email</Text>
          </View>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Text style={styles.iAgreeToThePickUpTermsAn}>
            I agree to the PickUp terms and conditions
          </Text>
          <Text style={styles.cREATEANACCOUNT}>CREATE AN ACCOUNT</Text>
        </ImageBackground>
      </View>
      <Pressable
        style={styles.cancelPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  pickUpText: {
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
  textFieldView: {
    position: "absolute",
    top: 201,
    left: 42,
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
  textFieldView1: {
    position: "absolute",
    top: 429,
    left: 42,
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
  textFieldView2: {
    position: "absolute",
    top: 505,
    left: 42,
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
  textFieldView3: {
    position: "absolute",
    top: 353,
    left: 42,
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
    top: 573,
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
  textFieldView4: {
    position: "absolute",
    top: 132,
    left: 42,
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
  textFieldView5: {
    position: "absolute",
    top: 277,
    left: 42,
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
    top: 647,
    left: 29,
    width: 19,
    height: 19,
  },
  iAgreeToThePickUpTermsAn: {
    position: "absolute",
    top: 649,
    left: 56,
    fontSize: 9,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  cREATEANACCOUNT: {
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
    top: 15,
    left: 20,
    width: 375,
    height: 812,
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
