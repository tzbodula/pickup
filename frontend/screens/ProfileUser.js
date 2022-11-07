import { Image, StyleSheet, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Avatar } from "@rneui/base";
import { Storage } from 'expo-storage'

import { AirbnbRating } from 'react-native-ratings';
import {LOCAL_IP} from '@env';

import React, { useState, useEffect } from 'react'

let favoriteSportAdjustment = 10.75

const ProfileUser = () => {
  const [favoriteSports, setSportInfo] = useState([])
  const [username, setUsername] = useState("")
  const [rating, setRating] = useState("")
  const [gamesJoined, setGamesJoined] = useState("")
  const [gamesAttended, setGamesAttended] = useState("")
  const [bio, setBio] = useState("")
  const navigation = useNavigation();

    useEffect(() => {
      return () => {
          favoriteSportAdjustment = 10.75
      }
  }, [])

  const requestOnPageLoad = () => {
    fetch(`http://${LOCAL_IP}:3000/user/`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'}
      }).then((res) => {return res.json()})
      .then((retrieved) => {
        if (retrieved.status == 200) {
          setUsername(retrieved.data.account_username)
          setRating(retrieved.data.rating)
          setGamesJoined(retrieved.data.games_joined)
          setGamesAttended(retrieved.data.games_attended);
          setBio(retrieved.data.bio);
        }
      }).then(() => {
        fetch(`http://${LOCAL_IP}:3000/user/sports`)
        .then((res) => {return res.json()})
        .then((res) => {
          setSportInfo(res.data)
        })
        .catch((e) => {console.log(e)})
      })
    
  }

  useFocusEffect(React.useCallback(requestOnPageLoad, []))
  if(username == null || rating == null || gamesAttended == null || gamesJoined == null || bio == null) {
    return(
    <SafeAreaView style={styles.footerView}>
    <Text>Not rendered!</Text>
    <Pressable
        style={styles.singleTabPressable}
        onPress={() => navigation.navigate("ProfileUser")}
      >
        <SafeAreaView style={styles.iconAndText}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home3.png")}
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
            source={require("../assets/search4.png")}
          />
          <Text style={[styles.text4, styles.mt2]}>Events</Text>
        </SafeAreaView>
      </Pressable>
    </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.profileUserView}>
       <SafeAreaView style={styles.footerView}>
        <Pressable
            style={styles.singleTabPressable}
            onPress={() => navigation.navigate("ProfileUser")}
          >
            <SafeAreaView style={styles.iconAndText}>
              <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/home3.png")}
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
                source={require("../assets/search4.png")}
              />
              <Text style={[styles.text4, styles.mt2]}>Events</Text>
            </SafeAreaView>
          </Pressable>
        </SafeAreaView>
        <Avatar
          containerStyle={{
            borderWidth: 3,
            borderColor: "#80ced7",
            borderStyle: "solid",
            position: "relative",
            left: 30,
            top: 10,
          }}
          size={"large"}
          imageProps={{
            resizeMode: 'cover',
            width: 200
          }}
          rounded
          source={{
            uri: 'https://i.postimg.cc/mr2ZPx6T/icon.png'
          }}
          icon='../assets/icon.png' 
        />
  
        <Text style={styles.dOTUNIVERSITY4Text}>{username}</Text>
        <AirbnbRating size={20} defaultRating={rating} isDisabled={true} showRating={false} ratingContainerStyle={styles.userRating} selectedColor="#80ced7" />
        <Text style={styles.bioStyle}>{bio}</Text>
        <Text style={styles.text5}>{gamesAttended}</Text>
        <Text style={styles.text6}>{(((1.0 * gamesAttended) / gamesJoined) * 100)}%</Text>
        <Text style={styles.gamesPlayedText}>Games Played</Text>
        <Text style={styles.attendanceRateText}>Attendance Rate</Text>
        <Pressable
          style={styles.buttonPressable}
          onPress={() => navigation.navigate("EditSettings")}
        >
          <Image
            style={styles.leadingIcon}
            resizeMode="cover"
            source={require("../assets/leading-icon17.png")}
          />
          <Text style={[styles.mediumText, styles.ml6]}>Edit Profile</Text>
          <Image
            style={[styles.trailingIcon, styles.ml6]}
            resizeMode="cover"
            source={require("../assets/trailing-icon13.png")}
          />
        </Pressable>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/70314-1.png")}
        />
        <Pressable
          style={styles.vectorPressable}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
        </Pressable>
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-193.png")}
        />
        <Image
          style={styles.ellipseIcon3}
          resizeMode="cover"
          source={require("../assets/ellipse-193.png")}
        />

        <Image
          style={styles.basketball1Icon}
          resizeMode="cover"
          source={require("../assets/basketball-1.png")}
        />
        <Image
          style={styles.football1Icon}
          resizeMode="cover"
          source={require("../assets/soccer-ball-1.png")}
        />


        
       {/*  <Text style={styles.footballText}>Football</Text>
        <Text style={styles.timESText}>timES</Text>
        <Text style={styles.timESText1}>timES</Text>
        <Text style={styles.timESText2}>timES</Text>
        <Text style={styles.timESText3}>timES</Text>
        <Text style={styles.tENNISText}>TENNIS</Text>
        <Text style={styles.sOCCERText}>SOCCER</Text>
        <Text style={styles.bASKETBALLText}>BASKETBALL</Text>
        <Text style={styles.text7}>25</Text>
        <Text style={styles.text8}>3</Text>
        <Text style={styles.text9}>1</Text>
        <Text style={styles.text10}>1</Text> */}
        
        <Text style={styles.aLLTIMESPORTSPLAYED}>Favorite Sports</Text>
        
        {
          //Please do your CSS magic Thomas to get these to align property thx
          favoriteSports.length
          ?
          favoriteSports.map((sport) => {
            favoriteSportAdjustment = favoriteSportAdjustment + 6
            let topPercentage = favoriteSportAdjustment + "%"

            return <Text style={{position: "absolute", top: topPercentage, left: 70, fontSize: 14, fontFamily: "GearUp", color: "#000", textAlign: "left"}} key={sport.sport_id}> {sport.sport_name} </Text> 
        })
          :
          <Text> empty </Text>
        }
        
        <SafeAreaView style={styles.lineView} />
      </SafeAreaView>
    );
  }

};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml6: {
    marginLeft: 6,
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
    color: "#1eabbb",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  singleTabView: {
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
    fontFamily: "Arsenal",
    color: "#80ced7",
    textAlign: "center",
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
    color: "#1eabbb",
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
    color: "#111",
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
  ellipseIcon1: {
    position: "absolute",
    top: 50,
    right: 245,
    bottom: 657,
    left: 25,
    borderRadius: 50,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  stockUserImageIcon: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 95,
    height: 95,
  },
  dOTUNIVERSITY4Text: {
    position: "absolute",
    paddingTop: "5%",
    top: "9%",
    left: 138,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 200,
    height: 30,
  },
  vectorIcon: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "57.33%",
    bottom: "87.32%",
    left: "37.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "37.33%",
    bottom: "87.32%",
    left: "57.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "44%",
    bottom: "87.32%",
    left: "50.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "50.67%",
    bottom: "87.32%",
    left: "44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "2.46%",
    width: "5.33%",
    top: "10.22%",
    right: "30.67%",
    bottom: "87.32%",
    left: "64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bioStyle: {
    position: "absolute",
    top: "12.3%",
    left: "34%",
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp Soft",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  userRating: {
    color: "#34495e",
    position: "absolute",
    left: "32%",
    top: "21%",
  },
  text5: {
    position: "absolute",
    paddingTop: "18%",
    top: 205,
    left: 48,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text6: {
    position: "absolute",
    paddingTop: "18%",
    top: 205,
    left: 263,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 70,
    height: 25,
  },
  gamesPlayedText: {
    position: "absolute",
    top: 228,
    left: 21,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 113,
    height: 23,
  },
  attendanceRateText: {
    position: "absolute",
    top: 231,
    left: 234,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 113,
    height: 23,
  },
  leadingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  mediumText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 18,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  trailingIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonPressable: {
    position: "absolute",
    top: "21%",
    left: 272,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 29,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    top: "21.75%",
    left: 276,
    width: 21,
    height: 19,
  },
  icon1: {
    height: "2.46%",
    width: "3.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "5.07%",
    top: "3.2%",
    right: "91.73%",
    bottom: "94.33%",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 319,
    left: 13,
    width: 45,
    height: 45,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 372,
    left: 14,
    width: 43,
    height: 43,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 423,
    left: 14,
    width: 45,
    height: 45,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 479,
    left: 14,
    width: 43,
    height: 43,
  },
  basketball1Icon: {
    position: "absolute",
    top: 377,
    left: 21,
    width: 30,
    height: 33,
  },
  soccerBall1: {
    position: "absolute",
    top: 427,
    left: 19,
    width: 35,
    height: 38,
  },
  tennisRacket1: {
    position: "absolute",
    top: 486,
    left: 20,
    width: 30,
    height: 30,
  },
  football1Icon: {
    position: "absolute",
    top: 327,
    left: 19,
    width: 32,
    height: 30,
  },
  footballText: {
    position: "absolute",
    top: "40.5%",
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText: {
    position: "absolute",
    top: 344,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText1: {
    position: "absolute",
    top: 390,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText2: {
    position: "absolute",
    top: 440,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  timESText3: {
    position: "absolute",
    top: 488,
    left: 311,
    fontSize: 10,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  tENNISText: {
    position: "absolute",
    top: "59.5%",
    left: 73,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  sOCCERText: {
    position: "absolute",
    top: "53.5%",
    left: 71,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  bASKETBALLText: {
    position: "absolute",
    top: "46.5%",
    left: 70,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    paddingTop: "5%",
    top: "40%",
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text8: {
    position: "absolute",
    paddingTop: "5%",
    top: "46%",
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text9: {
    position: "absolute",
    paddingTop: "5%",
    top: "52%",
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  text10: {
    position: "absolute",
    paddingTop: "5%",
    top: "58%",
    left: 302,
    fontSize: 15,
    lineHeight: 16,
    fontFamily: "GearUp",
    color: "#63bcc7",
    textAlign: "center",
    width: 60,
    height: 25,
  },
  aLLTIMESPORTSPLAYED: {
    position: "absolute",
    top: 265,
    left: 15,
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 303.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 376.02,
    height: 1,
  },
  profileUserView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ProfileUser;
