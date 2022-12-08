import { Dimensions } from 'react-native';

import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback

} from "react-native";
import { useNavigation, useFocusEffect} from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react'

import { TouchableOpacity } from 'react-native';

import { LOCAL_IP, GOOGLE_PLACES_API_KEY } from '@env';

import { Tile } from "@rneui/themed";

import Header from '../components/Header';
import Footer from "../components/Footer"
import { BackgroundImage } from '@rneui/base';

let cardPosition = -16;
const MyComponent = ({item}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.cardWrapperStyle}>
      <Pressable
        onPress={() => navigation.navigate('EventDetails', {event_id: item.event_id})}
      >
        <Card containerStyle={{ marginLeft: "-3.6%", backgroundColor: 'rgba(52, 52, 52, 0)', borderWidth: 0 }}>

            <ImageBackground
              style={styles.eventImage}
              resizeMode="stretch"
              source={item.sport_id == 1 ? require("../assets/soccer-banner.png") : item.sport_id == 2 ? require("../assets/football-banner.png") : item.sport_id == 3 ? require("../assets/basketball-banner.png") : require("../assets/chestnut1.png")}
            />

            <Text style={styles.eventTitle}>{item.event_name}</Text>
            <Text style={styles.eventTime}>{item.event_time}</Text>
            <Text style={styles.eventLocation}>{item.event_city + ", " + item.event_state} </Text>
            <Text style={styles.eventHostName}>{item.account_username}</Text>
            <Text style={styles.eventDate}>{item.event_date}</Text>
            <Text style={styles.eventPlayerCount}>{item.current_players}/{item.maximum_players} PLAYERS</Text>
        </Card>
      </Pressable>
    </SafeAreaView>
  )
}
const MainPage = () => {
  const navigation = useNavigation();

  const [currentEvents, setCurrentEvents] = useState([])

  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const requestOnPageLoad = () => {
    setIsLoading(true)
    console.log("Attempting to get the ", currentPage, " page")
    fetch(`http://${LOCAL_IP}:3000/user/getEvents`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => { return res.json() })
      .then((retrieved) => {
        if (retrieved.status == 200) {
          setCurrentEvents(retrieved.data)
          setIsLoading(false)
        }
      }).catch((e) => console.log(e))

  }

  useFocusEffect(
    React.useCallback(requestOnPageLoad, [])
  )

  const renderEvents = ({ item }) => {
    return (

      <Tile 
        width={393}
        height={139}
        activeOpacity={1}
        containerStyle={styles.cardWrapperStyle}
        onPress={() => navigation.navigate('EventDetails', {event_id: item.event_id})}
        ImageComponent={() => <ImageBackground style={styles.eventImage} resizeMode="stretch" source={item.sport_id == 1 ? require("../assets/soccer-banner.png") : item.sport_id == 2 ? require("../assets/football-banner.png") : item.sport_id == 3 ? require("../assets/basketball-banner.png") : require("../assets/chestnut1.png")}></ImageBackground>}
        >
        
              <Text style={styles.eventTitle}>{item.event_name}</Text>
              <Text style={styles.eventPlayerCount}>{item.current_players}/{item.maximum_players} PLAYERS</Text>
              <Text style={styles.eventTime}>{item.event_time}</Text>
              <Text style={styles.eventLocation}>{item.event_city + ", " + item.event_state} </Text>
              <Text style={styles.eventHostName}>{item.account_username}</Text>
              <Text style={styles.eventDate}>{item.event_date}</Text>
         
      </Tile>

    )
  }

  const renderLoader = () => {
    return (
      isLoading ?
        <SafeAreaView style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </SafeAreaView> : null
    )
  }

  const loadMoreItem = () => {
    // setCurrentPage(currentPage + 1) <- ERROR: This causes the app to bug out, calling useFocusEffect 4 times and swapping pages too fast
  }

  return (

    <>
      <SafeAreaView style={styles.mainPageView} >
      
          <FlatList
            data={currentEvents}
            renderItem={(item) => renderEvents(item)}
            keyExtractor={item => item.event_id}
            ItemSeparatorComponent={() => <SafeAreaView/>}
            ListHeaderComponent={() => <SafeAreaView style={{marginTop: "27%"}}/>}
          ></FlatList>
        {/*  End of displaying the event data */}
    
        {/*  Footer */}
      </SafeAreaView>
      
      <Header/>
      <Footer pageID={0} />
    </>
  );
  
};

const styles = StyleSheet.create({

  cardWrapperStyle: {
    borderWidth: 2,
borderColor: "#FF000",
    marginTop: "-5%",
    marginLeft: "2.5%",
    marginBottom: "10%",
  },

  eventImage: {
    zIndex: -1,
    position: "absolute",
    width: Dimensions.get('window').width * .95,
    height: 139,
  },

  eventTitle: {
    zIndex: 3,
    position: "absolute",
    bottom: "-100%",
    left: "28%",
    textAlign: 'center',
    paddingTop: "7%",
    fontSize: 18,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    writingDirection: 'auto',
    width: 200,
    height: 25,
  },

  eventTime: {
    position: "absolute",
    paddingTop: 4,
    bottom: "-415%",
    left: "55%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },

  eventLocation: {
    position: "absolute",
    bottom: "-500%",
    left: "3%",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },

  eventHostName: {
    position: "absolute",
    bottom: "-525%",
    left: "55%",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "right",
    width: 180,
    height: 25,
  },

  eventDate: {
    paddingTop: 5,
    position: "absolute",
    bottom: "-415%",
    left: "3%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 28,
  },

  eventPlayerCount: {
    position: "absolute",
    paddingTop: 6,
    bottom: "-250%",
    left: "40.75%",
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  
  mainPageView: {
    top: 0,
    position: "relative",
    backgroundColor: "#040C12",
 
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainPage;