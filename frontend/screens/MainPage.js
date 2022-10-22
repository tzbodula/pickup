import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPageView}>
      <View style={styles.footerView}>
        <Pressable
          style={styles.singleTabPressable}
          onPress={() => navigation.navigate("ProfileUser")}
        >
          <View style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.text, styles.mt2]}>Account</Text>
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
          <Text style={styles.text1}>+</Text>
        </Pressable>
      </View>
      <View style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Pressable
        style={styles.ellipsePressable}
        onPress={() => navigation.navigate("MainPageSoccer1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-20.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <ImageBackground
        style={styles.chestnut1Icon}
        resizeMode="cover"
        source={require("../assets/chestnut1.png")}
      />
      <ImageBackground
        style={styles.chestnut2Icon}
        resizeMode="cover"
        source={require("../assets/chestnut2.png")}
      />
      <ImageBackground
        style={styles.chestnut3Icon}
        resizeMode="cover"
        source={require("../assets/chestnut3.png")}
      />
      <ImageBackground
        style={styles.chestnut4Icon}
        resizeMode="cover"
        source={require("../assets/chestnut4.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("EventDetails")}
      />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("EventDetails")}
      />
      <Pressable
        style={styles.rectanglePressable2}
        onPress={() => navigation.navigate("EventDetails")}
      />
      <Pressable
        style={styles.rectanglePressable3}
        onPress={() => navigation.navigate("EventDetails")}
      />
      <Text style={styles.v4FLAGText}>{`4v4 FLAG `}</Text>
      <Text style={styles.v3CASUALText}>3V3 CASUAL</Text>
      <Text style={styles.v7TACKLEText}>{`7V7 TACKLE `}</Text>
      <Text style={styles.v1ROUTESText}>1V1 ROUTES</Text>
      <Text style={styles.pMText}>7:30 PM</Text>
      <Text style={styles.pMText1}>2:30 PM</Text>
      <Text style={styles.pMText2}>1:30 PM</Text>
      <Text style={styles.pMText3}>4:00 PM</Text>
      <Text style={styles.iNDIANTRAILNC}>INDIAN TRAIL, NC</Text>
      <Text style={styles.cHARLOTTENCText}>CHARLOTTE, NC</Text>
      <Text style={styles.mATTHEWSNCText}>MATTHEWS, NC</Text>
      <Text style={styles.mINTHILLNC}>MINT HILL, NC</Text>
      <Text style={styles.wHOWANTSMOKEText}>WHOWANTSMOKE?</Text>
      <Text style={styles.bruhmomentText}>bruhmoment</Text>
      <Text style={styles.rAYLEWISFAN52Text}>RAYLEWISFAN52</Text>
      <Text style={styles.tAKEYAANKLESText}>TAKEYAANKLES</Text>
      <Text style={styles.text2}>10/25/2022</Text>
      <Text style={styles.text3}>10/26/2022</Text>
      <Text style={styles.text4}>10/27/2022</Text>
      <Text style={styles.text5}>10/28/2022</Text>
      <Text style={styles.pLAYERSText}>6/8 PLAYERS</Text>
      <Text style={styles.pLAYERSText1}>5/6 PLAYERS</Text>
      <Text style={styles.pLAYERSText2}>9/14 PLAYERS</Text>
      <Text style={styles.pLAYERSText3}>1/2 PLAYERS</Text>
      <Image
        style={styles.football1Icon}
        resizeMode="cover"
        source={require("../assets/football-1.png")}
      />
      <ImageBackground
        style={styles.football2Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
      />
      <ImageBackground
        style={styles.football3Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
      />
      <ImageBackground
        style={styles.football4Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
      />
      <ImageBackground
        style={styles.football5Icon}
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
      <ImageBackground
        style={styles.crown1Icon}
        resizeMode="cover"
        source={require("../assets/crown1.png")}
      />
      <ImageBackground
        style={styles.crown2Icon}
        resizeMode="cover"
        source={require("../assets/crown1.png")}
      />
      <ImageBackground
        style={styles.crown3Icon}
        resizeMode="cover"
        source={require("../assets/crown1.png")}
      />
      <ImageBackground
        style={styles.crown4Icon}
        resizeMode="cover"
        source={require("../assets/crown1.png")}
      />
      <View style={styles.changeMilesView}>
        <Text style={styles.mILESMAXText}>30 MILES MAX</Text>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={styles.rectangleView2} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
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
    color: "#111",
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
  text1: {
    position: "absolute",
    height: "47.46%",
    width: "49.15%",
    top: "27.12%",
    right: "25.42%",
    bottom: "25.42%",
    left: "25.42%",
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
  footerView: {
    position: "absolute",
    top: 729,
    left: 0,
    width: 375,
    height: 68,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 375,
    height: 82,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 5,
    left: 38,
    width: 45,
    height: 45,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 6,
    left: 103,
    width: 43,
    height: 43,
  },
  icon: {
    width: 45,
    height: 45,
  },
  ellipsePressable: {
    position: "absolute",
    left: 166,
    top: 5,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 6,
    left: 232,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 6,
    left: 292,
    width: 43,
    height: 43,
  },
  icon1: {
    height: "1.49%",
    width: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "80.79%",
    top: "2.82%",
    right: "13.88%",
    bottom: "95.69%",
  },
  chestnut1Icon: {
    position: "absolute",
    top: 96,
    left: 13,
    width: 348,
    height: 139,
  },
  chestnut2Icon: {
    position: "absolute",
    top: 255,
    left: 13,
    width: 348,
    height: 139,
  },
  chestnut3Icon: {
    position: "absolute",
    top: 414,
    left: 13,
    width: 348,
    height: 139,
  },
  chestnut4Icon: {
    position: "absolute",
    top: 573,
    left: 13,
    width: 348,
    height: 139,
  },
  rectanglePressable: {
    position: "absolute",
    top: 108,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 267,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable2: {
    position: "absolute",
    top: 426,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable3: {
    position: "absolute",
    top: 585,
    left: 14,
    width: 346,
    height: 126,
  },
  v4FLAGText: {
    position: "absolute",
    top: 140,
    left: 106,
    fontSize: 24,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  v3CASUALText: {
    position: "absolute",
    top: 299,
    left: 106,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  v7TACKLEText: {
    position: "absolute",
    top: 458,
    left: 106,
    fontSize: 21,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  v1ROUTESText: {
    position: "absolute",
    top: 617,
    left: 106,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  pMText: {
    position: "absolute",
    top: 198,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText1: {
    position: "absolute",
    top: 357,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText2: {
    position: "absolute",
    top: 516,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText3: {
    position: "absolute",
    top: 675,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  iNDIANTRAILNC: {
    position: "absolute",
    top: 216,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  cHARLOTTENCText: {
    position: "absolute",
    top: 375,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  mATTHEWSNCText: {
    position: "absolute",
    top: 534,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  mINTHILLNC: {
    position: "absolute",
    top: 693,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  wHOWANTSMOKEText: {
    position: "absolute",
    top: 216,
    left: 228,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  bruhmomentText: {
    position: "absolute",
    top: 375,
    left: 258,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  rAYLEWISFAN52Text: {
    position: "absolute",
    top: 534,
    left: 243,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  tAKEYAANKLESText: {
    position: "absolute",
    top: 693,
    left: 248,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  text2: {
    position: "absolute",
    top: 200,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 28,
  },
  text3: {
    position: "absolute",
    top: 359,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 16,
  },
  text4: {
    position: "absolute",
    top: 518,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 16,
  },
  text5: {
    position: "absolute",
    top: 677,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 16,
  },
  pLAYERSText: {
    position: "absolute",
    top: 166,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText1: {
    position: "absolute",
    top: 325,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText2: {
    position: "absolute",
    top: 484,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText3: {
    position: "absolute",
    top: 643,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  football1Icon: {
    position: "absolute",
    top: 13,
    left: 44,
    width: 32,
    height: 30,
  },
  football2Icon: {
    position: "absolute",
    top: 141,
    left: 87,
    width: 16,
    height: 15,
  },
  football3Icon: {
    position: "absolute",
    top: 300,
    left: 87,
    width: 16,
    height: 15,
  },
  football4Icon: {
    position: "absolute",
    top: 459,
    left: 87,
    width: 16,
    height: 15,
  },
  football5Icon: {
    position: "absolute",
    top: 618,
    left: 87,
    width: 16,
    height: 15,
  },
  basketball1Icon: {
    position: "absolute",
    top: 11,
    left: 110,
    width: 30,
    height: 33,
  },
  soccerBall1: {
    position: "absolute",
    top: 9,
    left: 171,
    width: 35,
    height: 38,
  },
  tennisRacket1: {
    position: "absolute",
    top: 13,
    left: 238,
    width: 30,
    height: 30,
  },
  crown1Icon: {
    position: "absolute",
    top: 209,
    left: 227,
    width: 10,
    height: 7,
  },
  crown2Icon: {
    position: "absolute",
    top: 368,
    left: 256,
    width: 10,
    height: 7,
  },
  crown3Icon: {
    position: "absolute",
    top: 527,
    left: 241,
    width: 10,
    height: 7,
  },
  crown4Icon: {
    position: "absolute",
    top: 686,
    left: 247,
    width: 10,
    height: 7,
  },
  mILESMAXText: {
    position: "absolute",
    height: "78.57%",
    width: "66.94%",
    top: "0%",
    right: "15.7%",
    bottom: "21.43%",
    left: "17.36%",
    fontSize: 8,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "14.05%",
    top: "0%",
    right: "85.95%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#80ced7",
  },
  vectorIcon: {
    position: "absolute",
    height: "71.43%",
    width: "5.79%",
    top: "14.29%",
    right: "90.91%",
    bottom: "14.29%",
    left: "3.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "14.05%",
    top: "0%",
    right: "-14.05%",
    bottom: "0%",
    left: "100%",
    backgroundColor: "#80ced7",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  vectorIcon1: {
    position: "absolute",
    height: "71.43%",
    width: "5.79%",
    top: "14.29%",
    right: "3.31%",
    bottom: "14.29%",
    left: "90.91%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  changeMilesView: {
    position: "absolute",
    top: 59,
    left: 127,
    width: 121,
    height: 14,
  },
  mainPageView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainPage;
