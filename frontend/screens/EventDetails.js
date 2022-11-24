import React, {useState} from 'react';
import { Image, StyleSheet, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import {LOCAL_IP} from "@env";

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
  console.log(eventDetails)
  if (!eventDetails || !players || !account_id) { //There should always be at least 1 player in this array (the host)
    return null
  } else {
  return (
    <SafeAreaView style={styles.eventDetailsView}>
    <SafeAreaView style={styles.eventContent}>
      <Text style={styles.eventName}>{eventDetails.event_name}</Text>
      <Text style={styles.eventDateTime}>{eventDetails.event_date} | {eventDetails.event_time}</Text>
      <Text style={styles.eventLocation}>Location{'\n'}
      {eventDetails.event_location}</Text>
      <Chip
        title="Open In Maps"
        containerStyle={{width: "40%", alignSelf: "center", marginTop: "4%"}}
        color= "#80ced7"
        titleStyle={{color: "#000000", fontFamily:"GearUp"}}
      >

      </Chip>
      <Card style={styles.playerInformation} containerStyle={{backgroundColor: "rgba(52, 52, 52, 0.2)"}}>
        <Card.Title style={{color: "#80ced7", fontFamily: "GearUp"}}>EVENT PLAYERS | {eventDetails.current_players}/{eventDetails.maximum_players}</Card.Title>
        <Card.Divider/>
        {players.map((player, index)=> {
          return(
            <SafeAreaView key={index} style={styles.userList}>
              <Text style={styles.username}>{player.account_username} </Text>
              <AirbnbRating size={20} defaultRating={player.rating} isDisabled={true} showRating={false} ratingContainerStyle={styles.userRating} selectedColor="#80ced7" />
            </SafeAreaView>
          )
        })}
      </Card>
    </SafeAreaView>
    <Header/>

    <Footer pageID={0 } />
    </SafeAreaView>
  );
}
};

const styles = StyleSheet.create({
  eventDetailsView: {
    position: "relative",
    backgroundColor: "#040C12",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  eventContent: {

  },
  eventName: {
    fontFamily: "GearUp",
    fontSize: "32",
    textAlign: "center",
    color: "#FFFFFF",
  },
  eventDateTime: {
    fontFamily: "GearUp",
    fontSize: "16",
    textAlign: "center",
    color: "#FFFFFF",
  },
  eventLocation: {
    marginTop: "4%",
    fontFamily: "GearUp",
    fontSize: "16",
    textAlign: "center",
    color: "#FFFFFF",
  },
  username: {
    fontFamily: "GearUp",
    color: "#80ced7"
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
  eventContent: {
    color: "#FFFFFF",
    position: "absolute",
    flex: 1,
    alignContent: "center",
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
  oPENCHATText: {
    position: "absolute",
    top: 362,
    left: 91,
    fontSize: 24,
    lineHeight: 50,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
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
    top: 208,
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
    top: 246,
    left: 228,
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

  playerInformation: {
    backgroundColor: "#FF0000",
    position: "absolute",
    top: "15%",
  },
  userRating: {
    color: "#34495e",
    position: "absolute",
    top: 442,
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
  userAttendance: {
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
    top: 283,
    left: 141,
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
