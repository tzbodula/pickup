import React, {useState} from 'react';
import { Image, StyleSheet, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import {LOCAL_IP} from "@env";
import {Storage} from "expo-storage";
import { Card, Chip } from '@rneui/themed';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AirbnbRating } from 'react-native-ratings';
import {Button} from 'react-native';

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
      console.log("Route is", route)
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
          <Card.Title style={{color: "#80ced7", fontFamily: "GearUp"}}>EVENT PLAYERS | {eventDetails.current_players}/{eventDetails.maximum_players} | JOIN</Card.Title>
          <Card.Divider/>
          {players.map((player, index)=> {
            return(
              <SafeAreaView key={index} style={styles.userList}>
                <Text style={styles.username}>{player.account_username} </Text>
                <AirbnbRating size={20} defaultRating={player.rating} isDisabled={true} showRating={false} ratingContainerStyle={styles.userRating} selectedColor="#80ced7" />
              </SafeAreaView>
            )
          })}
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
  userAttendance: {
    color: "#80ced7"
  },
  eventContent: {
    color: "#FFFFFF",
    position: "absolute",
    flex: 1,
    alignContent: "center",
    width: Dimensions.get('window').width,
    top: "18%",
  },

  playerInformation: {
    backgroundColor: "#FF0000",
    position: "absolute",
    top: "15%",
  },
  userRating: {
    color: "#34495e",
    position: "absolute",
    right: "1%",
    bottom: "-30%",
  },
  userAttendance: {
    position: "absolute",
    left: "32%"
  }
});

export default EventDetails;
