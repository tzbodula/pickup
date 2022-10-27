import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileUserView}>
      <View style={styles.footerView}>
        <View style={styles.singleTabView}>
          <View style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home6.png")}
            />
            <Text style={[styles.text, styles.mt2]}>Account</Text>
          </View>
        </View>
        <Pressable
          style={styles.singleTabPressable}
          onPress={() => navigation.navigate("Friends")}
        >
          <View style={styles.iconAndText1}>
            <Image
              style={styles.userIcon}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
            <Text style={[styles.text1, styles.mt2]}>Friends</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable1}
          onPress={() => navigation.navigate("Map")}
        >
          <View style={styles.iconAndText2}>
            <Image
              style={styles.compassIcon}
              resizeMode="cover"
              source={require("../assets/compass.png")}
            />
            <Text style={[styles.text2, styles.mt2]}>Map</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.framePressable}
          onPress={() => navigation.navigate("CreateEvent")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.text3}>+</Text>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable2}
          onPress={() => navigation.navigate("MainPage")}
        >
          <View style={styles.iconAndText3}>
            <Image
              style={styles.searchIcon}
              resizeMode="cover"
              source={require("../assets/search6.png")}
            />
            <Text style={[styles.text4, styles.mt2]}>Events</Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-122.png")}
      />
      <Image
        style={styles.stockUserImageIcon}
        resizeMode="cover"
        source={require("../assets/stockuserimage.png")}
      />
      <Text style={styles.dOTUNIVERSITY4Text}>dOTUNIVERSITY4</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.vectorIcon2}
        resizeMode="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector30.png")}
      />
      <Text style={styles.allIKnowAreDots}>All I Know Are Dots</Text>
      <Text style={styles.text5}>30</Text>
      <Text style={styles.text6}>92%</Text>
      <Text style={styles.gamesPlayedText}>Games Played</Text>
      <Text style={styles.attendanceRateText}>Attendance Rate</Text>
      <Pressable
        style={styles.buttonPressable}
        onPress={() => navigation.navigate("EditSettings")}
      >
        <Image
          style={styles.leadingIcon}
          resizeMode="cover"
          source={require("../assets/leading-icon17.png")}
        />
        <Text style={[styles.mediumText, styles.ml6]}>Edit Profile</Text>
        <Image
          style={[styles.trailingIcon, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon13.png")}
        />
      </Pressable>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/70314-1.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vector31.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-193.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-201.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-193.png")}
      />
      <Image
        style={styles.basketball1Icon}
        resizeMode="cover"
        source={require("../assets/basketball-1.png")}
      />
      <Image
        style={styles.soccerBall1}
        resizeMode="cover"
        source={require("../assets/soccer-ball-1.png")}
      />
      <Image
        style={styles.tennisRacket1}
        resizeMode="cover"
        source={require("../assets/tennis-racket-1.png")}
      />
      <Image
        style={styles.football1Icon}
        resizeMode="cover"
        source={require("../assets/football-1.png")}
      />
      <Text style={styles.footballText}>Football</Text>
      <Text style={styles.timESText}>timES</Text>
      <Text style={styles.timESText1}>timES</Text>
      <Text style={styles.timESText2}>timES</Text>
      <Text style={styles.timESText3}>timES</Text>
      <Text style={styles.tENNISText}>TENNIS</Text>
      <Text style={styles.sOCCERText}>SOCCER</Text>
      <Text style={styles.bASKETBALLText}>BASKETBALL</Text>
      <Text style={styles.text7}>25</Text>
      <Text style={styles.text8}>3</Text>
      <Text style={styles.text9}>1</Text>
      <Text style={styles.text10}>1</Text>
      <Text style={styles.aLLTIMESPORTSPLAYED}>ALL TIME SPORTS PLAYED</Text>
      <View style={styles.lineView} />
    </View>
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
  singleTabView: {
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
  singleTabPressable: {
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
    right: "21.35%",
    bottom: "0%",
    left: "57.33%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  ellipseIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text3: {
    position: "absolute",
    height: "47.46%",
    width: "49.15%",
    top: "27.12%",
    left: "25.42%",
    fontSize: 48,
    lineHeight: 18,
    fontFamily: "Arsenal",
    color: "#1eabbb",
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
    top: 729,
    left: 0,
    width: 375,
    height: 68,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 50,
    right: 245,
    bottom: 657,
    left: 25,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 95,
    height: 95,
  },
  dOTUNIVERSITY4Text: {
    position: "absolute",
    top: 56,
    left: 138,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  vectorIcon: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "57.33%",
    bottom: "87.32%",
    left: "37.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "37.33%",
    bottom: "87.32%",
    left: "57.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "44%",
    bottom: "87.32%",
    left: "50.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "50.67%",
    bottom: "87.32%",
    left: "44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "30.67%",
    bottom: "87.32%",
    left: "64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  allIKnowAreDots: {
    position: "absolute",
    top: 113,
    left: 140,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "GearUp Soft",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  text5: {
    position: "absolute",
    top: 205,
    left: 48,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text6: {
    position: "absolute",
    top: 205,
    left: 263,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  gamesPlayedText: {
    position: "absolute",
    top: 228,
    left: 21,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 113,
    height: 23,
  },
  attendanceRateText: {
    position: "absolute",
    top: 231,
    left: 234,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 113,
    height: 23,
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
    fontSize: 20,
    lineHeight: 18,
    fontFamily: "Akshar",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  trailingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonPressable: {
    position: "absolute",
    top: 136,
    left: 272,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 29,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    top: 141,
    left: 276,
    width: 21,
    height: 19,
  },
  icon1: {
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
  ellipseIcon2: {
    position: "absolute",
    top: 319,
    left: 13,
    width: 45,
    height: 45,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 372,
    left: 14,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 423,
    left: 14,
    width: 45,
    height: 45,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 479,
    left: 14,
    width: 43,
    height: 43,
  },
  basketball1Icon: {
    position: "absolute",
    top: 377,
    left: 21,
    width: 30,
    height: 33,
  },
  soccerBall1: {
    position: "absolute",
    top: 427,
    left: 19,
    width: 35,
    height: 38,
  },
  tennisRacket1: {
    position: "absolute",
    top: 486,
    left: 20,
    width: 30,
    height: 30,
  },
  football1Icon: {
    position: "absolute",
    top: 327,
    left: 19,
    width: 32,
    height: 30,
  },
  footballText: {
    position: "absolute",
    top: 325,
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText: {
    position: "absolute",
    top: 344,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText1: {
    position: "absolute",
    top: 390,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText2: {
    position: "absolute",
    top: 440,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText3: {
    position: "absolute",
    top: 488,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  tENNISText: {
    position: "absolute",
    top: 481,
    left: 73,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  sOCCERText: {
    position: "absolute",
    top: 427,
    left: 71,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  bASKETBALLText: {
    position: "absolute",
    top: 374,
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 331,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text8: {
    position: "absolute",
    top: 377,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text9: {
    position: "absolute",
    top: 475,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text10: {
    position: "absolute",
    top: 427,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  aLLTIMESPORTSPLAYED: {
    position: "absolute",
    top: 265,
    left: 15,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 303.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 376.02,
    height: 1,
  },
  profileUserView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ProfileUser;
