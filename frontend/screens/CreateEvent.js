import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createEventView}>
      <Text style={styles.createNewEvent}>Create New Event</Text>
      <Text style={styles.eventNameText}>Event Name</Text>
      <View style={styles.frameView1}>
        <View style={styles.rectangleView} />
        <Text style={styles.v3SoccerText}>3v3 soccer</Text>
        <View style={styles.frameView} />
      </View>
      <Text style={styles.sportText}>Sport</Text>
      <Text style={styles.totalPlayersText}>Total Players</Text>
      <View style={styles.frameView2}>
        <View style={styles.rectangleView1} />
        <Text style={styles.sOCCERText}>SOCCER</Text>
        <Pressable
          style={styles.vectorPressable}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector51.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frameView3}>
        <View style={styles.rectangleView2} />
        <Text style={styles.text}>6</Text>
      </View>
      <Text style={styles.locationText}>Location</Text>
      <View style={styles.groupView}>
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image-12.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-31.png")}
        />
        <Image
          style={styles.image5Icon}
          resizeMode="cover"
          source={require("../assets/image-31.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../assets/image-31.png")}
        />
      </View>
      <Pressable
        style={styles.framePressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-273.png")}
        />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Text style={styles.text1}>+</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={styles.createEventButton}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("SoccerPickup")}
        />
        <Text style={styles.createEventText}>Create Event</Text>
      </Pressable>
      <Text style={styles.vs3Text}>3 vs 3</Text>
      <Image
        style={styles.datePickerIos14Calendar1Icon}
        resizeMode="cover"
        source={require("../assets/date-picker-ios14-calendar-1.png")}
      />
      <View style={styles.frameView4}>
        <View style={styles.rectangleView3} />
        <Text style={styles.craverRdCharlotteNc28262}>
          craver rd, charlotte, nc 28262
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createNewEvent: {
    position: "absolute",
    top: 39,
    left: 8,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 275,
    height: 20,
  },
  eventNameText: {
    position: "absolute",
    top: 80,
    left: 8,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp Soft",
    color: "#000",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 358,
    height: 52,
  },
  v3SoccerText: {
    position: "absolute",
    top: 19,
    left: 6,
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: -20,
    left: 8,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  frameView1: {
    position: "absolute",
    top: 101,
    left: 8,
    width: 358,
    height: 52,
  },
  sportText: {
    position: "absolute",
    top: 162,
    left: 8,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  totalPlayersText: {
    position: "absolute",
    top: 162,
    left: 211,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 170,
    height: 52,
  },
  sOCCERText: {
    position: "absolute",
    top: 19,
    left: 6,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  icon: {
    height: "23.08%",
    width: "11.76%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "83.53%",
    top: "38.46%",
    right: "4.71%",
    bottom: "38.46%",
  },
  frameView2: {
    position: "absolute",
    top: 185,
    left: 8,
    width: 170,
    height: 52,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 52,
    height: 52,
  },
  text: {
    position: "absolute",
    top: 16,
    left: 15,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
    width: 23,
    height: 23,
  },
  frameView3: {
    position: "absolute",
    top: 185,
    left: 211,
    width: 52,
    height: 52,
  },
  locationText: {
    position: "absolute",
    top: 246,
    left: 8,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 358,
    height: 187,
  },
  image3Icon: {
    position: "absolute",
    top: 107.03,
    left: 98.32,
    width: 21.37,
    height: 11.76,
  },
  image5Icon: {
    position: "absolute",
    top: 8.82,
    left: 336.63,
    width: 21.37,
    height: 11.76,
  },
  image4Icon: {
    position: "absolute",
    top: 71.74,
    left: 27.79,
    width: 21.37,
    height: 11.76,
  },
  groupView: {
    position: "absolute",
    top: 321,
    left: 8,
    width: 358,
    height: 187,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 21,
    height: 21,
  },
  text1: {
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "Assistant",
    color: "#9ad1d4",
    textAlign: "left",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  pressable: {
    position: "absolute",
    left: 2,
    top: 9.07,
  },
  framePressable: {
    position: "absolute",
    top: 7,
    left: 345,
    width: 21,
    height: 21,
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 321,
    height: 39,
  },
  createEventText: {
    position: "absolute",
    top: 12,
    left: 89,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  createEventButton: {
    position: "absolute",
    top: 765,
    left: 27,
    width: 321,
    height: 39,
  },
  vs3Text: {
    position: "absolute",
    top: 201,
    left: 267,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 94,
    height: 38,
  },
  datePickerIos14Calendar1Icon: {
    position: "absolute",
    top: 521,
    left: 77,
    width: 221,
    height: 231,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 358,
    height: 52,
  },
  craverRdCharlotteNc28262: {
    position: "absolute",
    top: 19,
    left: 6,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  frameView4: {
    position: "absolute",
    top: 269,
    left: 8,
    width: 358,
    height: 52,
  },
  createEventView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateEvent;
