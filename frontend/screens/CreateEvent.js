import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.createEventView}>
      <Text style={styles.createNewEvent}>Create New Event</Text>
      <Text style={styles.eventNameText}>Event Name</Text>
      <SafeAreaView style={styles.frameView1}>
        <SafeAreaView style={styles.rectangleView} />
        <TextInput style={styles.v3SoccerText}>3v3 soccer</TextInput>
        <SafeAreaView style={styles.frameView} />
      </SafeAreaView>
      <Text style={styles.totalPlayersText}>Total Players</Text>
      <Text style={styles.sportText}>Sport</Text>
      <SafeAreaView style={styles.frameView2}>
        <SafeAreaView style={styles.rectangleView1} />
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
      </SafeAreaView>
      <SafeAreaView style={styles.frameView3}>
        <SafeAreaView style={styles.rectangleView2} />
        <Text style={styles.text}>6</Text>
      </SafeAreaView>
      <Text style={styles.locationText}>Location</Text>
      <SafeAreaView style={styles.groupView}>
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
      </SafeAreaView>
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
          <Text style={styles.text1}>X</Text>
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

      <SafeAreaView style={styles.frameView4}>
        <SafeAreaView style={styles.rectangleView3} />
        <Text style={styles.craverRdCharlotteNc28262}>
          craver rd, charlotte, nc 28262
        </Text>
      </SafeAreaView>
      <Button containerStyle={{top: "63.5%", left: "1.5%"}} titleStyle={{fontFamily: "GearUp", color:"#80ced7"}} buttonStyle={{width:"40%"}}color="#00060a" onPress={showDatepicker} title="10/27/2022" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text style={{top: "55%", left: "1.5%", fontSize: 11, lineHeight: 14, fontFamily: "GearUp",color: "#000", textAlign: "left"}}>Date</Text>
      <SafeAreaView style={styles.frameView2}>
        <SafeAreaView style={styles.rectangleView1} />
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
      </SafeAreaView>
      <Button containerStyle={{top: "56%", left: "51.5%"}} titleStyle={{fontFamily: "GearUp", color:"#80ced7"}} buttonStyle={{width:"40%"}}color="#00060a" onPress={showDatepicker} title="02:30 PM" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text style={{top: "47.5%", left: "51%", fontSize: 11, lineHeight: 14, fontFamily: "GearUp", color: "#000", textAlign: "left"}}>Time</Text>
      <SafeAreaView style={styles.frameView2}>
        <SafeAreaView style={styles.rectangleView1} />
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
      </SafeAreaView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  createNewEvent: {
    position: "absolute",
    paddingTop: "3%",
    top: "6%",
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
  datePicker: {
    position: "absolute",
    top: 7,
    left: 77,
    width: 221,
    height: 231,
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
    paddingTop: "2%",
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
    paddingTop: "52%",
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
    top: 40,
    left: 15,
    width: 32,
    height: 32,
  },
  text1: {
    position: "relative",
    paddingTop: 2,
    left: 20,
    top: 44,
    bottom: "0%",
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "Assistant",
    color: "#9ad1d4",
    textAlign: "left",
  },
  pressable: {
    position: "absolute",
    left: 4,
    top: 6,
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
    paddingTop: "2%",
    top: "25%",
    left: "27.5%",
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
    paddingTop: 12,
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
    paddingTop: "1%",
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
