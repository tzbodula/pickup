import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DirectMessaging = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.directMessagingView}>
      <View style={styles.messageBoxView} />
      <View style={[styles.messageBoxView1, styles.mt10]} />
      <View style={[styles.messageBoxView2, styles.mt10]} />
      <Image
        style={[styles.attachmentsIcon, styles.mt10]}
        resizeMode="cover"
        source={require("../assets/attachments.png")}
      />
      <Text style={[styles.text, styles.mt10]}>+</Text>
      <Image
        style={[styles.sendIcon, styles.mt10]}
        resizeMode="cover"
        source={require("../assets/attachments.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.mt10]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.greatGameToday, styles.mt10]}>
        Great game today!
      </Text>
      <Text style={[styles.youTooLookingForwardToNe, styles.mt10]}>
        You too! Looking forward to next time.
      </Text>
      <Text style={[styles.wATCHYASELFText, styles.mt10]}>WATCHYASELF</Text>
      <Pressable
        style={[styles.vectorPressable, styles.mt10]}
        onPress={() => navigation.navigate("FriendProfile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector28.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.mt10]}
        resizeMode="cover"
        source={require("../assets/ellipse-271.png")}
      />
      <Image
        style={[styles.stockUserImageIcon, styles.mt10]}
        resizeMode="cover"
        source={require("../assets/stockuserimage2.png")}
      />
      <Text style={[styles.messageWATCHYASELFText, styles.mt10]}>
        Message WATCHYASELF
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  messageBoxView: {
    position: "absolute",
    top: 760,
    left: 56,
    borderRadius: 21,
    backgroundColor: "#111",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    width: 264,
    height: 42,
    flexShrink: 0,
    zIndex: 0,
  },
  messageBoxView1: {
    position: "absolute",
    top: 171,
    left: 15,
    borderRadius: 21,
    backgroundColor: "#00060a",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    width: 237,
    height: 41,
    flexShrink: 0,
    zIndex: 1,
  },
  messageBoxView2: {
    position: "absolute",
    top: 221,
    left: 134,
    borderRadius: 21,
    backgroundColor: "#80ced7",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    width: 237,
    height: 59,
    flexShrink: 0,
    zIndex: 2,
  },
  attachmentsIcon: {
    position: "absolute",
    top: 760,
    left: 6,
    width: 42,
    height: 42,
    flexShrink: 0,
    zIndex: 3,
  },
  text: {
    position: "absolute",
    height: "3.33%",
    width: "6.67%",
    top: "95.57%",
    right: "89.33%",
    bottom: "1.11%",
    left: "4%",
    fontSize: 32,
    lineHeight: 5,
    fontFamily: "Arsenal",
    color: "#9ad1d4",
    textAlign: "center",
    zIndex: 4,
  },
  sendIcon: {
    position: "absolute",
    top: 760,
    left: 327,
    width: 42,
    height: 42,
    flexShrink: 0,
    zIndex: 5,
  },
  vectorIcon: {
    position: "absolute",
    top: 773.68,
    left: 341.45,
    width: 17.07,
    height: 14.63,
    flexShrink: 0,
    zIndex: 6,
  },
  greatGameToday: {
    position: "absolute",
    top: 179,
    left: 30,
    fontSize: 16,
    lineHeight: 5,
    fontFamily: "Calibri",
    color: "#9ad1d4",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 208,
    height: 23,
    zIndex: 7,
  },
  youTooLookingForwardToNe: {
    position: "absolute",
    top: 229,
    left: 149,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Calibri",
    color: "#00060a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 208,
    height: 42,
    zIndex: 8,
  },
  wATCHYASELFText: {
    position: "absolute",
    top: 87,
    left: 115,
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
    zIndex: 9,
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
    top: "2.46%",
    right: "91.73%",
    bottom: "95.07%",
    zIndex: 10,
  },
  ellipseIcon: {
    position: "absolute",
    top: 51,
    right: 271,
    bottom: 667,
    left: 10,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 11,
  },
  stockUserImageIcon: {
    position: "absolute",
    top: 55,
    left: 14,
    width: 86,
    height: 86,
    flexShrink: 0,
    zIndex: 12,
  },
  messageWATCHYASELFText: {
    position: "absolute",
    top: 773,
    left: 74,
    fontSize: 16,
    lineHeight: 5,
    fontFamily: "Calibri",
    color: "#80ced7",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 227,
    height: 17,
    zIndex: 13,
  },
  directMessagingView: {
    position: "relative",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default DirectMessaging;
