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
  ActivityIndicator

} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react'

import { LOCAL_IP, GOOGLE_PLACES_API_KEY } from '@env';

import { Card } from "@rneui/themed";

import Header from '../components/Header';
import Footer from "../components/Footer"

let cardPosition = -16;
const MainPage = () => {
  const navigation = useNavigation();

  const [currentEvents, setCurrentEvents] = useState([])

  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const requestOnPageLoad = () => {
    console.log("")
    cardPosition = -16
    setIsLoading(true)
    console.log("Attempting to get the ", currentPage, " page")
    fetch(`http://${LOCAL_IP}:3000/events?page=${currentPage}&limit=10`, {
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

  const renderEvents = ({ item, index }) => {
    console.log("testing render")
    return (
      <SafeAreaView style={styles.cardWrapperStyle}>
        <Card containerStyle={{ marginLeft: "-3.6%", backgroundColor: 'rgba(52, 52, 52, 0)', borderWidth: 0 }}>
          <Pressable
            onPress={() => navigation.navigate("EventDetails", {event_id: item.event_id})}
          >
            <ImageBackground
              style={styles.eventImage}
              resizeMode="cover"
              source={require("../assets/chestnut1.png")}
            />
          </Pressable>

          <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("EventDetails", {event_id: item.event_id})}
          />
          <Text style={styles.eventTitle}>{item.event_name}</Text>
          <Text style={styles.eventTime}>{item.event_time}</Text>
          <Text style={styles.eventLocation}>{item.event_city + "," + item.event_state} </Text>
          <Text style={styles.eventHostName}>{item.account_username}</Text>
          <Text style={styles.eventDate}>{item.event_date}</Text>
          <Text style={styles.eventPlayerCount}>{item.current_players}/{item.maximum_players} PLAYERS</Text>
          <ImageBackground
            style={styles.crownIcon}
            resizeMode="cover"
            source={require("../assets/crown1.png")}
          />
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

  if (currentEvents == null) {
    return (
      <SafeAreaView style={styles.mainPageView} >
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false} />
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
          style={styles.singleTabPressable2}
          onPress={() => navigation.navigate("Map")}
        >
          <SafeAreaView style={styles.iconAndText2}>
            <Image
              style={styles.compassIcon}
              resizeMode="cover"
              source={require("../assets/compass.png")}
            />
            <Text style={[styles.text2, styles.mt2]}>Map</Text>
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
          <Image style={styles.addEventPlus}>+</Image>
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
      <SafeAreaView style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Pressable
        style={styles.ellipsePressable}
        onPress={() => navigation.navigate("MainPageSoccer1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-20.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>

      <Text>Loading</Text>

      <Image
        style={styles.sportIcon}
        resizeMode="cover"
        source={require("../assets/football-1.png")}
      />
      <Image
        style={styles.basketball1Icon}
        resizeMode="cover"
        source={require("../assets/basketball-1.png")}
      />
      <Image
        style={styles.soccerBall1}
        resizeMode="cover"
        source={require("../assets/soccer-ball-1.png")}
      />
      <Image
        style={styles.tennisRacket1}
        resizeMode="cover"
        source={require("../assets/tennis-racket-1.png")}
      />

      <SafeAreaView style={styles.changeMilesView}>
        <Text style={styles.mILESMAXText}>30 MILES MAX</Text>
        <SafeAreaView style={styles.rectangleView1} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <SafeAreaView style={styles.rectangleView2} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </SafeAreaView>
    </SafeAreaView>
    )
    
  } else {
    console.log("asd", currentEvents)
    return (
      <SafeAreaView style={styles.mainPageView} >

        <FlatList
          data={currentEvents}
          renderItem={renderEvents}
          keyExtractor={item => item.event_id}
          ItemSeparatorComponent={() => <View style={{ height: 110 }} />}
          onEndReached={loadMoreItem}
          ListFooterComponent={renderLoader}
          ListFooterComponentStyle={{borderColor: "#BE4025", borderTopWidth: 4,}}

        ></FlatList>

        {/*  End of displaying the event data */}
        <Header/>
        {/*  Footer */}
        <Footer pageID={0} />

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({



  headerText: {
    borderWidth: 2,
    borderColor: "#E23418",
    color: "#000000",
  },

  cardWrapperStyle: {
    marginTop: "-5%",
    marginBottom: "5%"
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
    position: "absolute",
    top: 99,
    left: 10,
    width: Dimensions.get('window').width * .95,
    height: 139,
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
    paddingTop: 17,
    fontSize: 24,
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
    left: 268,
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
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
    left: 150,
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
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainPage;