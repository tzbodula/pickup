import * as React from "react";
import { Image, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';


const ProfileOfAnotherUser = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.profileOfAnotherUser}>
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
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-123.png")}
      />
      <Image
        style={styles.stockUserImageIcon}
        resizeMode="cover"
        source={require("../assets/stockuserimage.png")}
      />
      <Text style={styles.aText}>WATCHYASELF</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-201.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.football2Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
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
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector34.png")}
      />
      <Text style={styles.yOURANKLESWONTEXISTAFTERM}>
        YOUR ANKLES WONT EXIST AFTER ME
      </Text>
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
      <Text style={styles.text5}>24</Text>
      <Text style={styles.text6}>17</Text>
      <Text style={styles.text7}>3</Text>
      <Text style={styles.text8}>2</Text>
      <Text style={styles.text9}>2</Text>
      <Text style={styles.text10}>85%</Text>
      <Text style={styles.gamesPlayedText}>Games Played</Text>
      <Text style={styles.attendanceRateText}>Attendance Rate</Text>
      <Pressable
        style={styles.buttonPressable}
        onPress={() => navigation.navigate("FriendProfile")}
      >
        <Image
          style={styles.leadingIcon}
          resizeMode="cover"
          source={require("../assets/leading-icon18.png")}
        />
        <Text style={[styles.mediumText, styles.ml6]}>{`Add Friend `}</Text>
        <Image
          style={[styles.trailingIcon, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon13.png")}
        />
      </Pressable>
      <SafeAreaView style={styles.buttonView}>
        <Image
          style={styles.leadingIcon1}
          resizeMode="cover"
          source={require("../assets/leading-icon19.png")}
        />
        <Text style={[styles.mediumText1, styles.ml6]}>Block</Text>
        <Image
          style={[styles.trailingIcon1, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/trailing-icon12.png")}
        />
      </SafeAreaView>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("EventDetails")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector28.png")}
        />
      </Pressable>
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
  ellipseIcon1: {
    position: "absolute",
    top: "2%",
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
  aText: {
    position: "absolute",
    top: "4%",
    left: 145,
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
    right: "56.27%",
    bottom: "87.81%",
    left: "38.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "36.27%",
    bottom: "87.81%",
    left: "58.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 336,
    left: 13,
    width: 45,
    height: 45,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 389,
    left: 14,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 440,
    left: 14,
    width: 45,
    height: 45,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 496,
    left: 14,
    width: 43,
    height: 43,
  },
  football2Icon: {
    position: "absolute",
    top: 515,
    left: 99,
    width: 16,
    height: 15,
  },
  basketball1Icon: {
    position: "absolute",
    top: 394,
    left: 21,
    width: 30,
    height: 33,
  },
  soccerBall1: {
    position: "absolute",
    top: 444,
    left: 19,
    width: 35,
    height: 38,
  },
  tennisRacket1: {
    position: "absolute",
    top: 503,
    left: 20,
    width: 30,
    height: 30,
  },
  football1Icon: {
    position: "absolute",
    top: 344,
    left: 19,
    width: 32,
    height: 30,
  },
  vectorIcon3: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "42.93%",
    bottom: "87.81%",
    left: "51.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "7.73%",
    right: "49.6%",
    bottom: "87.81%",
    left: "45.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon5: {
    position: "absolute",
    height: "3.45%",
    width: "7.47%",
    top: "7.73%",
    right: "28.53%",
    bottom: "86.82%",
    left: "64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  yOURANKLESWONTEXISTAFTERM: {
    position: "absolute",
    top: "11%",
    left: 145,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp Soft",
    color: "#000",
    textAlign: "left",
    width: 212,
  },
  aLLTIMESPORTSPLAYED: {
    position: "absolute",
    top: 282,
    left: 15,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 320.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: Dimensions.get('window').width,
    height: 1,
  },
  footballText: {
    position: "absolute",
    top: 342,
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
    top: 498,
    left: 73,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  sOCCERText: {
    position: "absolute",
    top: 444,
    left: 71,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  bASKETBALLText: {
    position: "absolute",
    top: 391,
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
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
    top: 340,
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
  text7: {
    position: "absolute",
    top: 386,
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
    top: 436,
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
    top: 484,
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
    fontSize: 11,
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
  buttonPressable: {
    position: "absolute",
    top: "18%",
    left: "10%",
    borderRadius: 4,
    backgroundColor: "#80ced7",
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
    fontSize: 12,
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
  buttonView: {
    position: "absolute",
    top: "18%",
    left: "55%",
    borderRadius: 4,
    backgroundColor: "#ff5858",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 93,
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
  profileOfAnotherUser: {
    top: "4%",
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    overflow: "hidden",
  },
});

export default ProfileOfAnotherUser;
