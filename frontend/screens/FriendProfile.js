import * as React from "react";
import { Image, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';


const FriendProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.friendProfileView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-122.png")}
      />
      <Image
        style={styles.stockUserImageIcon}
        resizeMode="cover"
        source={require("../assets/stockuserimage.png")}
      />
      <Text style={styles.wATCHYASELFText}>WATCHYASELF</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Text style={styles.yOURANKLESWONTEXISTAFTERM}>
        YOUR ANKLES WONT EXIST AFTER ME
      </Text>
      <Pressable
        onPress={() => navigation.navigate("ProfileOfAnotherUser")}
      >
        <SafeAreaView style={styles.buttonView}>
          <Image
            style={styles.leadingIcon}
            resizeMode="cover"
            source={require("../assets/leading-icon19.png")}
          />
          <Text style={[styles.mediumText, styles.ml6]}>Remove Friend</Text>
          <Image
            style={[styles.trailingIcon, styles.ml6]}
            resizeMode="cover"
            source={require("../assets/trailing-icon12.png")}
          />
        </SafeAreaView>
      </Pressable>
      <SafeAreaView style={styles.buttonView1}>
        <Image
          style={styles.leadingIcon1}
          resizeMode="cover"
          source={require("../assets/leading-icon19.png")}
        />
        <Text style={[styles.mediumText1, styles.ml6]}>{`Invite `}</Text>
        <Image
          style={[styles.trailingIcon1, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon12.png")}
        />
      </SafeAreaView>
      <Pressable
        style={styles.buttonPressable}
        onPress={() => navigation.navigate("DirectMessaging")}
      >
        <Image
          style={styles.leadingIcon2}
          resizeMode="cover"
          source={require("../assets/leading-icon18.png")}
        />
        <Text style={[styles.mediumText2, styles.ml6]}>Message</Text>
        <Image
          style={[styles.trailingIcon2, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon13.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <SafeAreaView style={styles.footerView}>
        <Pressable
          style={styles.singleTabPressable}
          onPress={() => navigation.navigate("ProfileUser")}
        >
          <SafeAreaView style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home7.png")}
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
              source={require("../assets/user8.png")}
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
      <Text style={styles.text5}>24</Text>
      <Text style={styles.text6}>85%</Text>
      <Text style={styles.gamesPlayedText}>Games Played</Text>
      <Text style={styles.attendanceRateText}>Attendance Rate</Text>
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-182.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-193.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-202.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-193.png")}
      />
      <Image
        style={styles.football3Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
      />
      <Image
        style={styles.basketball2Icon}
        resizeMode="cover"
        source={require("../assets/basketball-1.png")}
      />
      <Image
        style={styles.soccerBall2}
        resizeMode="cover"
        source={require("../assets/soccer-ball-1.png")}
      />
      <Image
        style={styles.tennisRacket2}
        resizeMode="cover"
        source={require("../assets/tennis-racket-1.png")}
      />
      <Image
        style={styles.football4Icon}
        resizeMode="cover"
        source={require("../assets/football-1.png")}
      />
      <Text style={styles.aLLTIMESPORTSPLAYED}>ALL TIME SPORTS PLAYED</Text>
      <SafeAreaView style={styles.lineView} />
      <Text style={styles.footballText}>Football</Text>
      <Text style={styles.timESText}>timES</Text>
      <Text style={styles.timESText1}>timES</Text>
      <Text style={styles.timESText2}>timES</Text>
      <Text style={styles.timESText3}>timES</Text>
      <Text style={styles.tENNISText}>TENNIS</Text>
      <Text style={styles.sOCCERText}>SOCCER</Text>
      <Text style={styles.bASKETBALLText}>BASKETBALL</Text>
      <Text style={styles.text7}>17</Text>
      <Text style={styles.text8}>3</Text>
      <Text style={styles.text9}>2</Text>
      <Text style={styles.text10}>2</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt2: {
    marginTop: 2,
  },
  ellipseIcon: {
    top: "2%",
    position: "absolute",
    right: 245,
    bottom: 657,
    left: 25,
    borderRadius: 50,
    maxWidth: "33%",
    overflow: "hidden",
    maxHeight: "33%",
  },
  stockUserImageIcon: {
    position: "absolute",
    top: "2.5%",
    left: 30,
    width: 95,
    height: 95,
  },
  wATCHYASELFText: {
    position: "absolute",
    top: "4%",
    left: 138,
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
    paddingTop: 10,
  },
  vectorIcon: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "58.13%",
    bottom: "87.81%",
    left: "36.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "38.13%",
    bottom: "87.81%",
    left: "56.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "44.8%",
    bottom: "87.81%",
    left: "49.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "51.47%",
    bottom: "87.81%",
    left: "43.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon5: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "31.47%",
    bottom: "87.81%",
    left: "63.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  yOURANKLESWONTEXISTAFTERM: {
    position: "absolute",
    top: "11%",
    left: 139,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 224,
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
    fontSize: 10,
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
    top: 165,
    left: 26,
    borderRadius: 4,
    backgroundColor: "#ff5858",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 147,
    height: 29,
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
  buttonView1: {
    position: "absolute",
    top: 175,
    left: 200,
    borderRadius: 4,
    backgroundColor: "#9ad1d4",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 147,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 10,
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
  buttonPressable: {
    position: "absolute",
    top: 136,
    left: 135,
    borderRadius: 4,
    backgroundColor: "#007ea7",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 151,
    height: 27,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
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
    top: "2.22%",
    right: "91.73%",
    bottom: "95.32%",
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
    color: "#000",
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
    color: "#1eabbb",
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
    fontFamily: "Arsenal",
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
  text5: {
    position: "absolute",
    top: 227,
    left: "15%",
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10
  },
  text6: {
    position: "absolute",
    top: 227,
    left: "65%",
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10
  },
  gamesPlayedText: {
    position: "absolute",
    top: 255,
    left: "9%",
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
    top: 255,
    left: "58%",
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 113,
    height: 23,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 341,
    left: 13,
    width: 45,
    height: 45,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 394,
    left: 14,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 445,
    left: 14,
    width: 45,
    height: 45,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 501,
    left: 14,
    width: 43,
    height: 43,
  },
  football3Icon: {
    position: "absolute",
    top: 520,
    left: 99,
    width: 16,
    height: 15,
  },
  basketball2Icon: {
    position: "absolute",
    top: 399,
    left: 21,
    width: 30,
    height: 33,
  },
  soccerBall2: {
    position: "absolute",
    top: 449,
    left: 19,
    width: 35,
    height: 38,
  },
  tennisRacket2: {
    position: "absolute",
    top: 508,
    left: 20,
    width: 30,
    height: 30,
  },
  football4Icon: {
    position: "absolute",
    top: 349,
    left: 19,
    width: 32,
    height: 30,
  },
  aLLTIMESPORTSPLAYED: {
    position: "absolute",
    top: 287,
    left: 15,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 325.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: Dimensions.get('window').width,
    height: 1,
  },
  footballText: {
    position: "absolute",
    top: 347,
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText: {
    position: "absolute",
    top: 366,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText1: {
    position: "absolute",
    top: 412,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText2: {
    position: "absolute",
    top: 462,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText3: {
    position: "absolute",
    top: 510,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  tENNISText: {
    position: "absolute",
    top: 503,
    left: 73,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  sOCCERText: {
    position: "absolute",
    top: 449,
    left: 71,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  bASKETBALLText: {
    position: "absolute",
    top: 396,
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 342,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10,
  },
  text8: {
    position: "absolute",
    top: 391,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10,
  },
  text9: {
    position: "absolute",
    top: 441,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10,
  },
  text10: {
    position: "absolute",
    top: 489,
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
    paddingTop: 10,
  },
  friendProfileView: {
    top: "4%",
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    overflow: "hidden",
  },
});

export default FriendProfile;
