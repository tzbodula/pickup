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

} from "react-native";
import { useNavigation, useFocusEffect} from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react'

import { TouchableOpacity } from 'react-native';

import { LOCAL_IP, GOOGLE_PLACES_API_KEY } from '@env';

import { Card, Chip } from "@rneui/themed";

import { pure } from 'recompose';

import Header from '../components/Header';
import Footer from "../components/Footer"

let cardPosition = -16;
const MainPage = () => {
  const navigation = useNavigation();

  const [currentEvents, setCurrentEvents] = useState([])

  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const requestOnPageLoad = () => {
    setIsLoading(true)
    console.log("Attempting to get the ", currentPage, " page")
    fetch(`http://${LOCAL_IP}:3000/events?page=${currentPage}&limit=10&mine=0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => { return res.json() })
      .then((retrieved) => {
        if (retrieved.status == 200) {
          console.log("Retrieved Data is", retrieved.data)
          setCurrentEvents(retrieved.data)
          setIsLoading(false)
        }
      }).catch((e) => console.log(e))
      .then(
        fetch
      )
    console.log("Loading Status: ", isLoading)
  }

  useFocusEffect(
    React.useCallback(requestOnPageLoad, [currentPage])
  )

  const renderEvents = ({ item }) => {
    return (
      <SafeAreaView style={styles.cardWrapperStyle}>
   
            <Card containerStyle={{ marginLeft: "-3.6%", backgroundColor: 'rgba(52, 52, 52, 0)', borderWidth: 0 }}>
                    <Pressable onPress={() => navigation.navigate("EventDetails", {event_id: item.event_id})} style={styles.eventPressable}>
    
                        <ImageBackground
                          style={styles.eventImage}
                          resizeMode="stretch"
                          source={item.sport_id == 1 ? require("../assets/soccer-banner.png") : item.sport_id == 2 ? require("../assets/football-banner.png") : item.sport_id == 3 ? require("../assets/basketball-banner.png") : require("../assets/chestnut1.png")}
                        >
                        </ImageBackground>

                    </Pressable>
                    <Text style={styles.eventTitle}>{item.event_name}</Text>
                    <Text style={styles.eventPlayerCount}>{item.current_players}/{item.maximum_players} PLAYERS</Text>
                    <Text style={styles.eventTime}>{item.event_time}</Text>
                    <Text style={styles.eventLocation}>{item.event_city + ", " + item.event_state} </Text>
                    <Text style={styles.eventHostName}>{item.account_username}</Text>
                    <Text style={styles.eventDate}>{item.event_date}</Text>
            </Card>
     
      </SafeAreaView>

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
    console.log("Loading more!")
  }

  return (
    <SafeAreaView style={styles.mainPageView} >

      <FlatList
        data={currentEvents}
        renderItem={(item) => renderEvents(item)}
        keyExtractor={item => item.event_id}
        ItemSeparatorComponent={() => <SafeAreaView/>}
      ></FlatList>

      {/*  End of displaying the event data */}
      <Header/>
      {/*  Footer */}
      <Footer pageID={0} />

    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({



  headerText: {
    color: "#000000",
  },

  cardWrapperStyle: {
    marginTop: "-5%",
    marginBottom: "35%",
  },

  ellipseIcon1: {
    position: "absolute",
    top: 5,
    left: 38,
    width: 45,
    height: 45,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 6,
    left: 103,
    width: 43,
    height: 43,
  },
  icon: {
    width: 45,
    height: 45,
  },
  ellipsePressable: {
    position: "absolute",
    left: 166,
    top: 5,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 6,
    left: 232,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 6,
    left: 292,
    width: 43,
    height: 43,
  },
  icon1: {
    height: "1.49%",
    width: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "80.79%",
    top: "2.82%",
    right: "13.88%",
    bottom: "95.69%",
  },
  eventImage: {
    zIndex: -1,
    position: "absolute",
    top: "45%",
    left: "-17%",
    width: Dimensions.get('window').width * .95,
    height: 139,
  },
  eventPressable: {
    zIndex: 0.5,
    position: "absolute",
    top: 80,
    borderWidth: 2,
    borderColor: "#FF0000",
    left: "15%",
    textAlign: 'center',
    paddingTop: "7%",
    width: 300,
    height: 55,
},
  rectanglePressable: {
    position: "absolute",
    top: 108,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 267,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable2: {
    position: "absolute",
    top: 426,
    left: 14,
    width: 346,
    height: 126,
  },
  rectanglePressable3: {
    position: "absolute",
    top: 585,
    left: 14,
    width: 346,
    height: 126,
  },

  eventTitle: {
    position: "absolute",
    top: 140,
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
  v3CASUALText: {
    position: "absolute",
    top: 299,
    left: 106,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  v7TACKLEText: {
    position: "absolute",
    top: 458,
    left: 106,
    fontSize: 21,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  v1ROUTESText: {
    position: "absolute",
    top: 617,
    left: 106,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  eventTime: {
    position: "absolute",
    paddingTop: 4,
    top: 198,
    left: 215,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText1: {
    position: "absolute",
    top: 357,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText2: {
    position: "absolute",
    top: 516,
    left: 175,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  pMText3: {
    position: "absolute",
    top: 675,
    left: 175,
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
    top: 218,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  cHARLOTTENCText: {
    position: "absolute",
    top: 375,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  mATTHEWSNCText: {
    position: "absolute",
    top: 534,
    left: 17,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  mINTHILLNC: {
    position: "absolute",
    top: 693,
    left: 17,
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
    top: 216,
    left: "56%",
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "right",
    width: 180,
    height: 25,
  },
  bruhmomentText: {
    position: "absolute",
    top: 375,
    left: 258,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  rAYLEWISFAN52Text: {
    position: "absolute",
    top: 534,
    left: 243,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  tAKEYAANKLESText: {
    position: "absolute",
    top: 693,
    left: 248,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
    width: 180,
    height: 25,
  },
  eventDate: {
    paddingTop: 5,
    position: "absolute",
    top: 200,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 28,
  },
  text3: {
    position: "absolute",
    top: 359,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#ffffff",
    textAlign: "left",
    width: 193,
    height: 16,
  },

  text5: {
    position: "absolute",
    top: 677,
    left: 17,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 193,
    height: 16,
  },
  eventPlayerCount: {
    position: "absolute",
    paddingTop: 6,
    top: 166,
    left: "40.75%",
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText1: {
    position: "absolute",
    paddingTop: 6,
    top: 325,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText2: {
    position: "absolute",
    top: 484,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  pLAYERSText3: {
    position: "absolute",
    top: 643,
    left: 130,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
    width: 145,
    height: 28,
  },
  sportIcon: {
    position: "absolute",
    top: 13,
    left: 44,
    width: 32,
    height: 30,
  },
  football2Icon: {
    position: "absolute",
    top: 141,
    left: 87,
    width: 16,
    height: 15,
  },
  football3Icon: {
    position: "absolute",
    top: 300,
    left: 87,
    width: 16,
    height: 15,
  },
  football4Icon: {
    position: "absolute",
    top: 459,
    left: 87,
    width: 16,
    height: 15,
  },
  football5Icon: {
    position: "absolute",
    top: 618,
    left: 87,
    width: 16,
    height: 15,
  },
  basketball1Icon: {
    position: "absolute",
    top: 11,
    left: 110,
    width: 30,
    height: 33,
  },
  soccerBall1: {
    position: "absolute",
    top: 9,
    left: 171,
    width: 35,
    height: 38,
  },
  tennisRacket1: {
    position: "absolute",
    top: 13,
    left: 238,
    width: 30,
    height: 30,
  },
  crownIcon: {
    position: "absolute",
    top: 209,
    left: 267,
    width: 10,
    height: 7,
  },
  mILESMAXText: {
    position: "absolute",
    height: "78.57%",
    width: "66.94%",
    top: "0%",
    right: "15.7%",
    bottom: "21.43%",
    left: "17.36%",
    fontSize: 8,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "14.05%",
    top: "0%",
    right: "85.95%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#80ced7",
  },
  vectorIcon: {
    position: "absolute",
    height: "71.43%",
    width: "5.79%",
    top: "14.29%",
    right: "90.91%",
    bottom: "14.29%",
    left: "3.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "14.05%",
    top: "0%",
    right: "-14.05%",
    bottom: "0%",
    left: "100%",
    backgroundColor: "#80ced7",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  vectorIcon1: {
    position: "absolute",
    height: "71.43%",
    width: "5.79%",
    top: "14.29%",
    right: "3.31%",
    bottom: "14.29%",
    left: "90.91%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  changeMilesView: {
    position: "absolute",
    top: 59,
    left: 127,
    width: 121,
    height: 14,
  },
  mainPageView: {
    top: 0,
    position: "relative",
    backgroundColor: "#040C12",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainPage;