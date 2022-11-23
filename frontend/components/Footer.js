
import {
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    Pressable,
    Dimensions
  } from "react-native";

import { useNavigation} from "@react-navigation/native";


export default function Footer({pageID}) {
    const navigation = useNavigation();
    let isEvents = false;
    let isFriends = false;
    let isMyEvents = false;
    let isAccount = false;

    switch (pageID) {
        case 0:
            isEvents = true;
            break;
        case 1:
            isFriends = true;
            break;
        case 2:
            isMyEvents = true;
            break;
        case 3:
            isAccount = true;
            break;
    }


    return (
        <SafeAreaView style={styles.footerView}>
            <Pressable
            style={styles.singleTabPressable}
            onPress={() => navigation.navigate("ProfileUser")}
            >
            <SafeAreaView style={styles.iconAndText}>
                <Image
                style={styles.homeIcon}
                resizeMode="cover"
                source={isAccount ? require("../assets/home3.png") : require("../assets/home7.png")}
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
                source={isFriends ? require("../assets/user8.png") : require("../assets/user.png")}
                />
                <Text style={[styles.text1, styles.mt2]}>Friends</Text>
            </SafeAreaView>
            </Pressable>
            <Pressable
            style={styles.singleTabPressable2}
            onPress={() => navigation.navigate("MyEvents")}
            >
            <SafeAreaView style={styles.iconAndText2}>
                <Image
                style={styles.compassIcon}
                resizeMode="cover"
                source={isMyEvents ? require("../assets/compass13.png") : require("../assets/compass.png")}
                />
                <Text style={[styles.text2, styles.mt2]}>My Events</Text>
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
            <Image source={require('../assets/pickup-logo.png')} style={styles.addEventPlus}></Image>
            </Pressable>
            <Pressable
            style={styles.singleTabPressable3}
            onPress={() => navigation.navigate("MainPage")}
            >
            <SafeAreaView style={styles.iconAndText3}>
                <Image
                style={styles.searchIcon}
                resizeMode="cover"
                source={isEvents ? require("../assets/search12.png") : require("../assets/search.png")}
                />
                <Text style={[styles.text4, styles.mt2]}>Events</Text>
            </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mt2: {
        marginTop: 2,
      },
    footerView: {
        position: "absolute",
        paddingVertical: "2%",
        backgroundColor: "#00060a",
        marginTop: "12%",
        top: Dimensions.get('window').height * 0.82,
        left: 0,
        width: Dimensions.get('window').width,
        height: 128,
      },
      singleTabPressable: {
        position: "absolute",
        height: "82.35%",
        width: "21.33%",
        top: "17.65%",
        right: "0%",
        bottom: "0%",
        left: "78.67%",
        backgroundColor: "#00060a",
        overflow: "hidden",
      },
      singleTabPressable1: {
        position: "absolute",
        height: "82.35%",
        width: "21.32%",
        top: "17.65%",
        right: "57.35%",
        bottom: "0%",
        left: "21.33%",
        backgroundColor: "#00060a",
        overflow: "hidden",
      },
      singleTabPressable2: {
        position: "absolute",
        height: "82.35%",
        width: "21.32%",
        top: "17.65%",
        right: "21.35%",
        bottom: "0%",
        left: "57.33%",
        backgroundColor: "#00060a",
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
        backgroundColor: "#00060a",
        overflow: "hidden",
      },
    
      iconAndText: {
        position: "absolute",
        transform: [
          {
            translateY: -40,
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
      iconAndText1: {
        position: "absolute",
        transform: [
          {
            translateY: -40,
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
      iconAndText2: {
        position: "absolute",
        transform: [
          {
            translateY: -40,
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
      iconAndText3: {
        position: "absolute",
        transform: [
          {
            translateY: -40,
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
      text: {
        position: "relative",
        fontSize: 7,
        lineHeight: 14,
        fontFamily: "GearUp",
        color: "#ffffff",
        textAlign: "center",
      },
      text1: {
        position: "relative",
        fontSize: 7,
        lineHeight: 14,
        fontFamily: "GearUp",
        color: "#ffffff",
        textAlign: "center",
      },
      text2: {
        position: "relative",
        fontSize: 7,
        lineHeight: 14,
        fontFamily: "GearUp",
        color: "#ffffff",
        textAlign: "center",
      },
      text4: {
        position: "relative",
        fontSize: 7,
        lineHeight: 14,
        fontFamily: "GearUp",
        color: "#ffffff",
        textAlign: "center",
      },
      homeIcon: {
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        overflow: "hidden",
      },
      compassIcon: {
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        overflow: "hidden",
      },
      searchIcon: {
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        overflow: "hidden",
      },
      userIcon: {
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        overflow: "hidden",
      },
      addEventCircle: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "16%",
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
        width: "100%",
        top: "44.2%",
        right: "25.42%",
        bottom: "25.42%",
        left: "32.42%",
        fontSize: 48,
        lineHeight: 18,
        fontFamily: "GearUp",
        color: "#ffffff",
        textAlign: "center",
      },
      framePressable: {
        position: "absolute",
        top: 0,
        left: 158,
        width: 59,
        height: 59,
      }
})
