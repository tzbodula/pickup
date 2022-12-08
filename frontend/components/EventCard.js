
import {
    Text,
    StyleSheet,
    Pressable,
    ImageBackground,
    Dimensions
  } from "react-native";

  import { Card } from "@rneui/themed";

const EventCard = ({index, card}) => {
    console.log("The index passed is", index)
    console.log("The card passed is", card)
    return (
        <>
          <Card key={index} containerStyle={{marginLeft: "-3.6%", backgroundColor: 'rgba(52, 52, 52, 0)', borderWidth: 0}}>
            <Pressable
              onPress={() => navigation.navigate("EventDetails")}
            >
              <ImageBackground
                style={styles.eventImage}
                resizeMode="cover"
                source={require("../assets/chestnut1.png")}
              />
            </Pressable>

            <Pressable
              style={styles.rectanglePressable}
              onPress={() => navigation.navigate("EventDetails")}
            />
            {console.log(card.event_id)}
            <Text style={styles.eventTitle}>{card.event_name}</Text>
            <Text style={styles.eventTime}>{card.event_time}</Text>
            <Text style={styles.eventLocation}>{card.event_city + "," + card.event_state} </Text>
            <Text style={styles.eventHostName}>{card.account_username}</Text>
            <Text style={styles.eventDate}>{card.event_date}</Text>
            <Text style={styles.eventPlayerCount}>{card.current_players}/{card.maximum_players} PLAYERS</Text>

          </Card>
        </>
    )
}

const styles = StyleSheet.create({
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
  eventImage: {
    position: "absolute",
    top: 99,
    left: 10,
    width: Dimensions.get('window').width * .95,
    height: 139,
  },
  crownIcon: {
    position: "absolute",
    top: 209,
    left: 267,
    width: 10,
    height: 7,
  },
})

export default EventCard