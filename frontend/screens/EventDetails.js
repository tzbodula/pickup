import React, {useState} from 'react';
import { Image, StyleSheet, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import {LOCAL_IP} from "@env";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { AirbnbRating } from 'react-native-ratings';
import { Card, Chip } from '@rneui/themed';


const EventDetails = ({route}) => {
  const navigation = useNavigation();
  const [eventDetails, setEventDetails] = useState({})
  const [players, setPlayers] = useState([])
  
  const requestOnPageLoad = () => {
    fetch(`http://${LOCAL_IP}:3000/events/${route.params.event_id}`)
    .then((res) => {return res.json()})
    .then((data) => {
      console.log("Event Details", data.data)
      setEventDetails(data.data)}
      )
    .then(
      fetch(`http://${LOCAL_IP}:3000/event/${route.params.event_id}/players`)
      .then((res) => {return res.json()})
      .then((data) => {setPlayers(data.data) 
        console.log("Players is set to", data.data)})
    )
  }

  useFocusEffect((React.useCallback(requestOnPageLoad, [])))
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
