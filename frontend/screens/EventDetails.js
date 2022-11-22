import React, {useState} from 'react';
import { Image, StyleSheet, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {Storage} from "expo-storage";
import {LOCAL_IP} from "@env";

import { Button } from "@rneui/themed";
    
const EventDetails = ({route}) => {
  let margin = 0;
  const navigation = useNavigation();
  const [eventDetails, setEventDetails] = useState({})
  const [players, setPlayers] = useState([])
  const [account_id, setAccountId] = useState(null)
  const [stateChange, setStateChange] = useState(false)

  const getCurrentAccountId = () => {
    Storage.getItem({ key: `account_id` })
    .then((data) => {setAccountId(data)})
    
  }

  const checkIfPlayerInEvent = () => {
    //console.log(players)
    if (players.find(player => player.account_id == account_id)) {
      return true
    }

    return false
  }
  const requestOnPageLoad = () => {
    console.log("made api request");
    // This makes sure that useFocusEffect() only calls this method once.
      getCurrentAccountId();
      fetch(`http://${LOCAL_IP}:3000/events/${route.params.event_id}`)
      .then((res) => {return res.json()})
      .then((data) => {
        setEventDetails(data.data)}
        )
      .then(
        fetch(`http://${LOCAL_IP}:3000/event/${route.params.event_id}/players`)
        .then((res) => {return res.json()})
        .then((data) => {setPlayers(data.data)})
      )
    
  }

  const testLog = () => {
    console.log("pressed")
  }

  const joinEvent = () => {
    console.log("test")
    fetch(`http://${LOCAL_IP}:3000/event/${route.params.event_id}/join`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'}})
      .then((res) => {return res.json()})
      .then((data) => {
        if (data.status == 200) {
          console.log("You should have joined the event...");
          setStateChange(!stateChange)
        }
      })
  }

  const leaveEvent = () => {
    fetch(`http://${LOCAL_IP}:3000/event/${route.params.event_id}/leave`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'}})
      .then((res) => {return res.json()})
      .then((data) => {
        if (data.status == 200) {
          console.log("You should have left the event...");
          setStateChange(!stateChange)
        }
      })
  }

  useFocusEffect((React.useCallback(requestOnPageLoad, [stateChange])))
  if (!eventDetails || !players || !account_id) { //There should always be at least 1 player in this array (the host)
    return null
  } else {
  return (
    <SafeAreaView style={styles.eventDetailsView}>
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
              source={require("../assets/user.png")}
            />
            <Text style={[styles.text1, styles.mt2]}>Friends</Text>
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
              source={require("../assets/search.png")}
            />
            <Text style={[styles.text4, styles.mt2]}>Events</Text>
          </SafeAreaView>
        </Pressable>
      </SafeAreaView>
      <Pressable
        style={styles.singleTabPressable4}
        onPress={() => navigation.navigate("ProfileUser")}
      >
        <SafeAreaView style={styles.iconAndText4}>
          <Image
            style={styles.homeIcon1}
            resizeMode="cover"
            source={require("../assets/home3.png")}
          />
          <Text style={[styles.text5, styles.mt2]}>Account</Text>
        </SafeAreaView>
      </Pressable>
     
      <SafeAreaView style={styles.rectangleView} />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        
      </Pressable>
      <Text style={styles.v3CASUALText}> {eventDetails.event_name} </Text>
      <Text style={styles.playersText}>Players</Text>
      
      <SafeAreaView/>
      
      <Text style={styles.uREC400PMFOOTBALL}>{eventDetails.event_city} | {eventDetails.event_time} | {eventDetails.sport_name}</Text>
      
      {/*
      Important note: need to make these pressable eventually so we can view profile
      */}
      {
        players.map((player => {
          {margin += 40}
          return (
          <Text style={{
            position: "absolute",
            top: 218 + margin,
            left: 47,
            fontSize: 10,
            lineHeight: 14,
            fontFamily: "GearUp Soft",
            color: "black",
            textAlign: "center"
          }}>{player.account_username}
          </Text>
         
          )

        }))
      }


     
      <Text
        style={styles.craverRdCharlotteNC28262}
      >{eventDetails.event_location}</Text>
      
      
      
      <Pressable
        style={styles.iconAndText5}
        onPress={() => navigation.navigate("Map")}
      >
        <SafeAreaView style={styles.iconAndText2}>
          <Image
            style={styles.compassIcon1}
            resizeMode="cover"
            source={require("../assets/compass3.png")}
          />
          <Text style={[styles.text6, styles.mt2]}>Map</Text>
        </SafeAreaView>
      </Pressable>
      <Pressable>
      <SafeAreaView style={styles.joinLeaveEventView}>
        <SafeAreaView/>
        {(() => {

          if (eventDetails.account_id == account_id) {
            return (
              <SafeAreaView>
                <Button title="EDIT EVENT"></Button>
              </SafeAreaView>
            );
          }

          if (checkIfPlayerInEvent()) {
            return <Button title="Leave Event" onPress={leaveEvent}></Button> 
          }
          return <Button title="Join" onPress={joinEvent}></Button>
        })()}
      </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
}
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
    backgroundColor: "#fff",
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
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
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
    left: "25.42%",
    fontSize: 48,
    lineHeight: 18,
    fontFamily: "Arsenal",
    color: "#9ad1d4",
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
    color: "#1eabbb",
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
  homeIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  text5: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  iconAndText4: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -23,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  singleTabPressable4: {
    position: "absolute",
    height: "6.9%",
    width: "21.33%",
    top: "91.26%",
    right: "20.8%",
    bottom: "1.85%",
    left: "57.87%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    top: 183,
    left: 0,
    width: 207,
    height: 125,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: Dimensions.get('window').width,
    height: '15%',
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
    left: "2.93%",
    top: "1.23%",
    right: "93.87%",
    bottom: "96.31%",
  },
  v3CASUALText: {
    position: "absolute",
    paddingTop: "10%",
    top: "6%",
    right: "9%",
    fontSize: 36,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 47,
  },
  playersText: {
    position: "absolute",
    paddingTop: "8%",
    top: "16%",
    left: "26%",
    fontSize: 28,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  vectorIcon1: {
    position: "absolute",
    top: 225,
    left: 157,
    width: 54.5,
    height: 31.5,
  },
  rectangleView1: {
    position: "absolute",
    top: 360,
    left: 81,
    backgroundColor: "#80ced7",
    borderStyle: "solid",
    borderColor: "#070606",
    borderWidth: 1,
    width: 206,
    height: 57,
  },
  uREC400PMFOOTBALL: {
    paddingTop: "10%",
    position: "absolute",
    top: "8%",
    left: "10%",
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp Soft",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 47,
  },
  bRUHMOMENTText: {
    position: "absolute",
    top: 218,
    left: 47,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp Soft",
    color: "#9ad1d4",
    textAlign: "center",
  },
  mOSSMACHINEText: {
    position: "absolute",
    top: 206,
    left: 216,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  wATCHYASELFText: {
    position: "absolute",
    top: 247,
    left: 47,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "center",
  },
  sACKATTACKText: {
    position: "absolute",
    top: "25%",
    left: "%",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  hIGHLIGHTREEL2Text: {
    position: "absolute",
    top: 287,
    left: 48,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "center",
  },
  image2Icon: {
    position: "absolute",
    top: 192,
    left: 43,
    width: 20,
    height: 14,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 205,
    left: 322,
    width: 18,
    height: 18,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 205,
    left: 344,
    width: 18,
    height: 18,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 245,
    left: 344,
    width: 18,
    height: 18,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 245,
    left: 322,
    width: 18,
    height: 18,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 285,
    left: 26,
    width: 18,
    height: 18,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 285,
    left: 4,
    width: 18,
    height: 18,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 245,
    left: 26,
    width: 18,
    height: 18,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 245,
    left: 4,
    width: 18,
    height: 18,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 205,
    left: 26,
    width: 18,
    height: 18,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 205,
    left: 4,
    width: 18,
    height: 18,
  },
  eye191545412801Icon: {
    position: "absolute",
    top: 210,
    left: 323,
    width: 16,
    height: 8,
  },
  eye191545412802Icon: {
    position: "absolute",
    top: 250,
    left: 323,
    width: 16,
    height: 8,
  },
  eye191545412805Icon: {
    position: "absolute",
    top: 290,
    left: 27,
    width: 16,
    height: 8,
  },
  icon1: {
    width: 16,
    height: 8,
  },
  eye191545412806Pressable: {
    position: "absolute",
    left: 27,
    top: 250,
  },
  eye191545412807Icon: {
    position: "absolute",
    top: 210,
    left: 27,
    width: 16,
    height: 8,
  },
  
  image1Icon: {
    position: "absolute",
    top: 481,
    left: 60,
    width: 263,
    height: 224,
  },
  craverRdCharlotteNC28262: {
    position: "absolute",
    top: 500,
    left: 62,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 260,
    height: 32,
  },
  rectangleView13: {
    position: "absolute",
    top: 230,
    left: 162,
    width: 49,
    height: 35,
  },
  vSText: {
    paddingTop: "20%",
    position: "absolute",
    top: 228,
    left: 160,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#00060a",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 25,
  },
  vectorIcon2: {
    position: "absolute",
    top: 221.81,
    left: 155.04,
    width: 13.93,
    height: 32.87,
  },
  image3Icon: {
    position: "absolute",
    top: 606,
    left: 132,
    width: 20,
    height: 20,
  },
  compassIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text6: {
    position: "relative",
    fontSize: 7,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  iconAndText5: {
    position: "absolute",
    transform: [
      {
        translateY: 393,
      },
      {
        translateX: 65.5,
      },
    ],
    top: "50%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView14: {
    position: "absolute",
    height: "49.23%",
    width: "57.3%",
    top: "52.31%",
    right: "43.26%",
    bottom: "-1.54%",
    left: "-0.56%",
    backgroundColor: "#80ced7",
    borderStyle: "solid",
    borderColor: "#070606",
    borderWidth: 1,
  },
  joinText: {
    paddingTop: "2%",
    position: "absolute",
    top: "66.15%",
    left: "17.42%",
    fontSize: 13,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  pLAYER6Text: {
    position: "absolute",
    top: "6.15%",
    left: "61.8%",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
  },
  joinLeaveEventView: {
    position: "absolute",
    top: 400,
    left: 100,
    width: 178,
    height: 65,
  },
  eventDetailsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EventDetails;
