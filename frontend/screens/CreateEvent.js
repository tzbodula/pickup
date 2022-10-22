import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Friends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.friendsView}>
      <View style={styles.footerView}>
        <Pressable
          style={styles.singleTabPressable}
          onPress={() => navigation.navigate("ProfileOfAnotherUser")}
        >
          <View style={styles.iconAndText}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home7.png")}
            />
            <Text style={[styles.text, styles.mt2]}>Account</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable1}
          onPress={() => navigation.navigate("Friends")}
        >
          <View style={styles.iconAndText1}>
            <Image
              style={styles.userIcon}
              resizeMode="cover"
              source={require("../assets/user8.png")}
            />
            <Text style={[styles.text1, styles.mt2]}>Friends</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.singleTabPressable2}
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
          style={styles.singleTabPressable3}
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
        source={require("../assets/ellipse-125.png")}
      />
      <Image
        style={styles.stockUserImageIcon}
        resizeMode="cover"
        source={require("../assets/stockuserimage5.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-125.png")}
      />
      <Image
        style={styles.stockUserImageIcon1}
        resizeMode="cover"
        source={require("../assets/stockuserimage5.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-125.png")}
      />
      <Image
        style={styles.stockUserImageIcon2}
        resizeMode="cover"
        source={require("../assets/stockuserimage5.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-125.png")}
      />
      <Image
        style={styles.stockUserImageIcon3}
        resizeMode="cover"
        source={require("../assets/stockuserimage5.png")}
      />
      <Pressable
        style={styles.wATCHYASELFPressable}
        onPress={() => navigation.navigate("FriendProfile")}
      >
        <Text style={styles.wATCHYASELFText}>WATCHYASELF</Text>
      </Pressable>
      <Text style={styles.hIGHLIGHTREEL2Text}>HIGHLIGHTREEL2</Text>
      <Text style={styles.mOSSMACHINEText}>MOSSMACHINE</Text>
      <Text style={styles.sACKATTACKText}>SACKATTACK</Text>
      <Text style={styles.friendsText}>Friends</Text>
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
    color: "#000",
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
    top: 729,
    left: 0,
    width: 375,
    height: 68,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 79,
    right: 303,
    bottom: 675,
    left: 14,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon: {
    position: "absolute",
    top: 83,
    left: 18,
    width: 50,
    height: 50,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 149,
    right: 303,
    bottom: 605,
    left: 14,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon1: {
    position: "absolute",
    top: 153,
    left: 18,
    width: 50,
    height: 50,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 223,
    right: 299,
    bottom: 531,
    left: 18,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon2: {
    position: "absolute",
    top: 227,
    left: 22,
    width: 50,
    height: 50,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 297,
    right: 299,
    bottom: 457,
    left: 18,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon3: {
    position: "absolute",
    top: 301,
    left: 22,
    width: 50,
    height: 50,
  },
  wATCHYASELFText: {
    fontSize: 15,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  wATCHYASELFPressable: {
    position: "absolute",
    left: 88,
    top: 100,
  },
  hIGHLIGHTREEL2Text: {
    position: "absolute",
    top: 163,
    left: 88,
    fontSize: 15,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  mOSSMACHINEText: {
    position: "absolute",
    top: 237,
    left: 92,
    fontSize: 15,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  sACKATTACKText: {
    position: "absolute",
    top: 311,
    left: 91,
    fontSize: 15,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  friendsText: {
    position: "absolute",
    top: 18,
    left: 117,
    fontSize: 24,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 156,
    height: 37,
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
  friendsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Friends;
