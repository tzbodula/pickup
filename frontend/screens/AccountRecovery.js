import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountRecovery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountRecoveryView}>
      <ImageBackground
        style={styles.accountRecoveryIcon}
        resizeMode="cover"
        source={require("../assets/accountrecovery.png")}
      >
        <Text style={styles.forgotYourPassword}>Forgot your password?</Text>
        <Text style={styles.pickUpText}>PickUp</Text>
        <View style={styles.loginCreateAccountElement}>
          <View style={styles.bgView} />
          <View style={styles.iPhoneXPortraitConte}>
            <View style={styles.qView}>
              <View style={styles.bgView1} />
              <Text style={styles.letterText}>Q</Text>
            </View>
            <View style={styles.zView}>
              <View style={styles.bgView2} />
              <Text style={styles.letterText1}>Z</Text>
            </View>
            <View style={styles.xView}>
              <View style={styles.bgView3} />
              <Text style={styles.letterText2}>X</Text>
            </View>
            <View style={styles.cView}>
              <View style={styles.bgView4} />
              <Text style={styles.letterText3}>C</Text>
            </View>
            <View style={styles.vView}>
              <View style={styles.bgView5} />
              <Text style={styles.letterText4}>V</Text>
            </View>
            <View style={styles.bView}>
              <View style={styles.bgView6} />
              <Text style={styles.letterText5}>B</Text>
            </View>
            <View style={styles.nView}>
              <View style={styles.bgView7} />
              <Text style={styles.letterText6}>N</Text>
            </View>
            <View style={styles.mView}>
              <View style={styles.bgView8} />
              <Text style={styles.letterText7}>M</Text>
            </View>
            <View style={styles.aView}>
              <View style={styles.bgView9} />
              <Text style={styles.letterText8}>A</Text>
            </View>
            <View style={styles.sView}>
              <View style={styles.bgView10} />
              <Text style={styles.letterText9}>S</Text>
            </View>
            <View style={styles.dView}>
              <View style={styles.bgView11} />
              <Text style={styles.letterText10}>D</Text>
            </View>
            <View style={styles.fView}>
              <View style={styles.bgView12} />
              <Text style={styles.letterText11}>F</Text>
            </View>
            <View style={styles.gView}>
              <View style={styles.bgView13} />
              <Text style={styles.letterText12}>G</Text>
            </View>
            <View style={styles.hView}>
              <View style={styles.bgView14} />
              <Text style={styles.letterText13}>H</Text>
            </View>
            <View style={styles.jView}>
              <View style={styles.bgView15} />
              <Text style={styles.letterText14}>J</Text>
            </View>
            <View style={styles.kView}>
              <View style={styles.bgView16} />
              <Text style={styles.letterText15}>K</Text>
            </View>
            <View style={styles.lView}>
              <View style={styles.bgView17} />
              <Text style={styles.letterText16}>L</Text>
            </View>
            <View style={styles.wView}>
              <View style={styles.bgView18} />
              <Text style={styles.letterText17}>W</Text>
            </View>
            <View style={styles.eView}>
              <View style={styles.bgView19} />
              <Text style={styles.letterText18}>E</Text>
            </View>
            <View style={styles.rView}>
              <View style={styles.bgView20} />
              <Text style={styles.letterText19}>R</Text>
            </View>
            <View style={styles.tView}>
              <View style={styles.bgView21} />
              <Text style={styles.letterText20}>T</Text>
            </View>
            <View style={styles.yView}>
              <View style={styles.bgView22} />
              <Text style={styles.letterText21}>Y</Text>
            </View>
            <View style={styles.uView}>
              <View style={styles.bgView23} />
              <Text style={styles.letterText22}>U</Text>
            </View>
            <View style={styles.iView}>
              <View style={styles.bgView24} />
              <Text style={styles.letterText23}>I</Text>
            </View>
            <View style={styles.oView}>
              <View style={styles.bgView25} />
              <Text style={styles.letterText24}>O</Text>
            </View>
            <View style={styles.pView}>
              <View style={styles.bgView26} />
              <Text style={styles.letterText25}>P</Text>
            </View>
          </View>
          <View style={styles.iPhoneXPortraitInput}>
            <View style={styles.homeIndicatorView} />
            <Image
              style={styles.micIcon}
              resizeMode="cover"
              source={require("../assets/mic.png")}
            />
            <Image
              style={styles.emojisIcon}
              resizeMode="cover"
              source={require("../assets/emojis.png")}
            />
            <Image
              style={styles.buttonIconSmall}
              resizeMode="cover"
              source={require("../assets/button--icon-small.png")}
            />
            <Image
              style={styles.shiftIcon}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
            <View style={styles.spaceView}>
              <View style={styles.bgView27} />
              <Text style={styles.letterText26}>space</Text>
            </View>
            <View style={styles.returnView}>
              <View style={styles.backgroundSecondaryBG} />
              <Text style={styles.letterText27}>return</Text>
            </View>
            <View style={styles.view}>
              <View style={styles.backgroundSecondaryBG1} />
              <Text style={styles.letterText28}>123</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Pressable
        style={styles.bACKTOLOGIN1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.bACKTOLOGIN}>BACK TO LOGIN</Text>
      </Pressable>
      <View style={styles.recoveryEmailSentView}>
        <View style={styles.leftButtonView}>
          <View style={styles.iconAndText}>
            <Image
              style={styles.leadingIcon}
              resizeMode="cover"
              source={require("../assets/leading-icon.png")}
            />
            <Text style={[styles.text, styles.ml4]}>Left Medium</Text>
          </View>
        </View>
        <View style={styles.iconAndText1}>
          <Image
            style={styles.leadingIcon1}
            resizeMode="cover"
            source={require("../assets/leading-icon1.png")}
          />
          <Text style={[styles.text1, styles.ml4]}>Reset Password</Text>
        </View>
      </View>
      <View style={styles.emailInputRecovery}>
        <View style={styles.textFieldView}>
          <Image
            style={styles.trailingIcon}
            resizeMode="cover"
            source={require("../assets/trailing-icon.png")}
          />
          <View style={styles.iconText}>
            <Image
              style={styles.leadingIcon2}
              resizeMode="cover"
              source={require("../assets/leading-icon2.png")}
            />
            <Text style={[styles.text2, styles.ml8]}>Email</Text>
          </View>
          <Text style={styles.labelText}>
            ENTER the EMAIL ATTACHED TO YOUR ACCOUNT
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  ml8: {
    marginLeft: 8,
  },
  forgotYourPassword: {
    position: "absolute",
    top: 93,
    left: 88,
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  pickUpText: {
    position: "absolute",
    top: 48,
    left: 85,
    fontSize: 40,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
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
    width: "11.2%",
    right: "0.8%",
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
    top: 539,
    left: 0,
    width: 382,
    height: 273,
    overflow: "hidden",
  },
  accountRecoveryIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    overflow: "hidden",
  },
  bACKTOLOGIN: {
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  bACKTOLOGIN1: {
    position: "absolute",
    left: 133,
    top: 313,
  },
  leadingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
  },
  text: {
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
        translateX: -57,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  leftButtonView: {
    position: "absolute",
    height: "86.96%",
    width: "96%",
    top: "0%",
    right: "4%",
    bottom: "13.04%",
    left: "0%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#00060a",
    overflow: "hidden",
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
    fontSize: 9,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  iconAndText1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
      {
        translateX: -61.5,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  recoveryEmailSentView: {
    position: "absolute",
    top: 248,
    left: 112,
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 3,
    width: 150,
    height: 46,
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
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#828282",
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
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  textFieldView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#aaa",
    borderWidth: 2,
  },
  emailInputRecovery: {
    position: "absolute",
    top: 177,
    left: 36,
    width: 302,
    height: 40,
  },
  accountRecoveryView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default AccountRecovery;
