import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileView}>
      <View style={styles.footerView}>
        <View style={styles.singleTabView}>
          <View style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home3.png")}
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
              source={require("../assets/search4.png")}
            />
            <Text style={[styles.text4, styles.mt2]}>Events</Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-121.png")}
      />
      <Image
        style={styles.stockUserImageIcon}
        resizeMode="cover"
        source={require("../assets/stockuserimage.png")}
      />
      <Text style={styles.dOTUNIVERSITY4Text}>DOTUNIVERSITY4</Text>
      <Text style={styles.mySportsText}>My Sports</Text>
      <View style={styles.lineView} />
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
      <View style={styles.textFieldView}>
        <Image
          style={styles.trailingIcon}
          resizeMode="cover"
          source={require("../assets/trailing-icon.png")}
        />
        <View style={styles.iconText}>
          <Text style={styles.text5}>ALL I KNOW ARE DOTS</Text>
          <Image
            style={[styles.leadingIcon, styles.ml8]}
            resizeMode="cover"
            source={require("../assets/leading-icon13.png")}
          />
        </View>
        <Text style={styles.labelText}>Bio</Text>
      </View>
      <Image
        style={styles.football2Icon}
        resizeMode="cover"
        source={require("../assets/football2.png")}
      />
      <View style={styles.addOrRemoveSportsView}>
        <Text style={styles.addSportText}>Add Sport</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.vectorIcon5}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.vectorIcon6}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.vectorIcon7}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={styles.vectorIcon8}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={styles.vectorIcon9}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={styles.vectorIcon10}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
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
        <Text style={styles.tENNISText}>TENNIS</Text>
        <Text style={styles.sOCCERText}>SOCCER</Text>
        <Text style={styles.bASKETBALLText}>BASKETBALL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml8: {
    marginLeft: 8,
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
    right: "25.42%",
    bottom: "25.42%",
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
    top: 60,
    left: 143,
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  mySportsText: {
    position: "absolute",
    top: 256,
    left: 17,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 297.54,
    left: -0.51,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 376.02,
    height: 1,
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
  trailingIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -8.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
  },
  text5: {
    position: "relative",
    fontSize: 7,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#9f9f9f",
    textAlign: "center",
  },
  leadingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  iconText: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    left: 6,
    height: 52,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText: {
    position: "absolute",
    top: -20,
    right: 0,
    left: 0,
    fontSize: 7,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#292929",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  textFieldView: {
    position: "absolute",
    top: 103,
    left: 143,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#80ced7",
    borderWidth: 2,
    width: 221,
    height: 63,
  },
  football2Icon: {
    position: "absolute",
    top: 496,
    left: 99,
    width: 16,
    height: 15,
  },
  addSportText: {
    position: "absolute",
    height: "10.7%",
    width: "36.92%",
    top: "89.3%",
    right: "47.67%",
    bottom: "0%",
    left: "15.41%",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "11.52%",
    width: "8.14%",
    top: "88.89%",
    right: "89.83%",
    bottom: "-0.41%",
    left: "2.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "6.58%",
    width: "0.58%",
    top: "91.36%",
    right: "93.6%",
    bottom: "2.06%",
    left: "5.81%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "0.82%",
    width: "4.65%",
    top: "94.24%",
    right: "91.57%",
    bottom: "4.94%",
    left: "3.78%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "9.88%",
    width: "8.14%",
    top: "4.53%",
    right: "-0.29%",
    bottom: "85.6%",
    left: "92.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "9.88%",
    width: "8.14%",
    top: "25.1%",
    right: "-0.29%",
    bottom: "65.02%",
    left: "92.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon5: {
    position: "absolute",
    height: "9.88%",
    width: "8.14%",
    top: "45.68%",
    right: "-0.29%",
    bottom: "44.44%",
    left: "92.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon6: {
    position: "absolute",
    height: "9.88%",
    width: "8.14%",
    top: "69.14%",
    right: "-0.29%",
    bottom: "20.99%",
    left: "92.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon7: {
    position: "absolute",
    height: "0.82%",
    width: "5.23%",
    top: "9.05%",
    right: "1.16%",
    bottom: "90.12%",
    left: "93.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon8: {
    position: "absolute",
    height: "0.82%",
    width: "5.23%",
    top: "29.63%",
    right: "1.16%",
    bottom: "69.55%",
    left: "93.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon9: {
    position: "absolute",
    height: "0.82%",
    width: "5.23%",
    top: "50.21%",
    right: "1.16%",
    bottom: "48.97%",
    left: "93.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon10: {
    position: "absolute",
    height: "0.82%",
    width: "5.23%",
    top: "73.66%",
    right: "1.16%",
    bottom: "25.51%",
    left: "93.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon2: {
    position: "absolute",
    height: "18.52%",
    width: "13.08%",
    top: "-0.41%",
    right: "87.21%",
    bottom: "81.89%",
    left: "-0.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon3: {
    position: "absolute",
    height: "17.7%",
    width: "12.5%",
    top: "21.4%",
    right: "87.5%",
    bottom: "60.91%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon4: {
    position: "absolute",
    height: "18.52%",
    width: "13.08%",
    top: "42.39%",
    right: "86.92%",
    bottom: "39.09%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon5: {
    position: "absolute",
    height: "17.7%",
    width: "12.5%",
    top: "65.43%",
    right: "87.5%",
    bottom: "16.87%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basketball1Icon: {
    position: "absolute",
    height: "13.58%",
    width: "8.72%",
    top: "23.46%",
    right: "89.24%",
    bottom: "62.96%",
    left: "2.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  soccerBall1: {
    position: "absolute",
    height: "15.64%",
    width: "10.17%",
    top: "44.03%",
    right: "88.37%",
    bottom: "40.33%",
    left: "1.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tennisRacket1: {
    position: "absolute",
    height: "12.35%",
    width: "8.72%",
    top: "68.31%",
    right: "89.53%",
    bottom: "19.34%",
    left: "1.74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  football1Icon: {
    position: "absolute",
    height: "12.35%",
    width: "9.3%",
    top: "2.88%",
    right: "89.24%",
    bottom: "84.77%",
    left: "1.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  footballText: {
    position: "absolute",
    height: "16.05%",
    width: "29.94%",
    top: "2.06%",
    right: "53.78%",
    bottom: "81.89%",
    left: "16.28%",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  tENNISText: {
    position: "absolute",
    height: "16.05%",
    width: "19.77%",
    top: "66.26%",
    right: "63.08%",
    bottom: "17.7%",
    left: "17.15%",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  sOCCERText: {
    position: "absolute",
    height: "16.05%",
    width: "23.55%",
    top: "44.03%",
    right: "59.88%",
    bottom: "39.92%",
    left: "16.57%",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  bASKETBALLText: {
    position: "absolute",
    height: "16.05%",
    width: "37.79%",
    top: "22.22%",
    right: "45.93%",
    bottom: "61.73%",
    left: "16.28%",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  addOrRemoveSportsView: {
    position: "absolute",
    top: 326,
    left: 13,
    width: 344,
    height: 243,
  },
  editProfileView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EditProfile;
