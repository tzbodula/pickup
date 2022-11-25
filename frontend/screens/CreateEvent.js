import { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from '@rneui/themed';

import { LOCAL_IP, GOOGLE_PLACES_API_KEY } from '@env';

import DateTimePicker from "react-native-modal-datetime-picker";
console.log("API KEY IS ", GOOGLE_PLACES_API_KEY)
const CreateEvent = () => {
  const colorScheme = 'dark'

  const [datePickerVisibility, setDatePickerVisibility] = useState(false)

  const [selectedDateLabel, setSelectedDateLabel] = useState("SELECT DATE AND TIME")

  const sports = ["Soccer", "Football", "Basketball"]

  const [eventName, setEventName] = useState("Your Event Name")



  const [eventSport, setEventSport] = useState("No Sport Selected")

  const [eventTotalPlayers, setEventTotalPlayers] = useState("1")

  const [placeID, setPlaceID] = useState("No Location Selected")

  const [buttonMessage, setButtonMessage] = useState("Create Event")

  const [selectedDate, setSelectedDate] = useState(null)
  const ref = useRef();

  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    ref.current?.setAddressText('UREC');
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  showDateTimePicker = () => {
    setDatePickerVisibility(true);
  };

  hideDateTimePicker = () => {
    setDatePickerVisibility(false);
  };

  handleLocationPicked = (data, details) => {
    setPlaceID(data.place_id)
  }

  handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    console.log("Type of date", typeof (date))
    setSelectedDate(date)
    let month = date.getMonth() + 1
    let currentDate = date.getDate()
    let year = date.getFullYear()

    let dateString = month + "/" + currentDate + "/" + year

    var options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    var timeString = date.toLocaleString('en-US', options);

    console.log("Date string is", dateString)
    console.log("Time string is", timeString)
    setSelectedDateLabel(dateString + " " + timeString)
    hideDateTimePicker()
  };


  handleCreateEvent = async () => {
    console.log("")
    //Do any of the fields still have their default values?
    if (eventName == "Your Event Name" || eventSport == "No Sport Selected" || eventTotalPlayers == "1" || placeID == "No Location Selected" || selectedDate == null) {
      setButtonMessage("FILL OUT ALL FIELDS!")
      await delay(3000)
      setButtonMessage("CREATE EVENT")
    } else {
      console.log("Event Name ", eventName)
      console.log("Event Sport ", eventSport)
      console.log("Event Total Players", eventTotalPlayers)
      console.log("Event Place ID", placeID)
      console.log("Event Selected Date", selectedDate)
      console.log("Attempting to create an event")

      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=formatted_address&key=${GOOGLE_PLACES_API_KEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const locationData = await response.json();
      const city = locationData.result.formatted_address.split(',')[1].trim()
      const state = locationData.result.formatted_address.split(',')[2].trim().substring(0, 2)
      const fullAddress = locationData.result.formatted_address


      let sportID = 1
      if (eventSport == "Soccer") {
        sportID = 1
      } else if (eventSport == "Football") {
        sportID = 2
      } else if (eventSport == "Basketball") {
        sportID = 3
      }

      let month = selectedDate.getMonth() + 1
      let currentDate = selectedDate.getDate()
      let year = selectedDate.getFullYear()
  
      let dateString = month + "/" + currentDate + "/" + year
  
      var options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      var timeString = selectedDate.toLocaleString('en-US', options);

      console.log("place id is ", placeID)
      console.log("Date string is", dateString)
      console.log("Time string is", timeString)
      fetch(`http://${LOCAL_IP}:3000/events`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'},
        body: JSON.stringify({
          "event_name": eventName,
          "sport_id": sportID,
          "total_players": eventTotalPlayers,
          "location": fullAddress,
          "date": dateString,
          "time": timeString,
          "city": city,
          "state": state,
          "place_id": placeID
        })
      }).then((res) => {return res.json()})
      .then((data) => {if(data.status == 200) {navigation.navigate('MainPage')}})

    }

  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.createEventView}>
      <Text style={styles.createNewEvent}>Create New Event</Text>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={styles.goBackText}>EXIT</Text>
      </Pressable>

      <Text style={styles.eventNameText}>Event Name</Text>

      <Input containerStyle={{
        backgroundColor: "#00060a", 
        position: "relative",
        marginTop: "12%",
        marginLeft: "2%",
        width: "75%",
        height: "5%",
        overflow: "hidden",
        borderColor: '#80ced7',
        borderWidth: 1,
        borderRadius: 5,
      }} 
      inputStyle={{ 
        textTransform: "uppercase", 
        color: "#80ced7", 
        fontFamily: "GearUp", 
        fontSize: 16 
      }}
      value={eventName}
      onChangeText = {(eventName) => setEventName(eventName)}
      >
      </Input>

      <Text style={styles.totalPlayersText}>Total Players</Text>
      <Text style={styles.sportText}>Sport</Text>
      <SelectDropdown
          data={sports}
          onSelect = {(selectedItem) => setEventSport(selectedItem)}
          defaultButtonText="Select a sport"
          buttonStyle={{
            position: "relative",
            left: "1%",
            backgroundColor: "#00060a", 
            marginTop: "12%",
            marginLeft: "5%",
            width: "65%", 
            height: "5%",
            borderColor: '#80ced7',
            borderWidth: 1,
            borderRadius: 5,
          }}
          buttonTextStyle={{
            textTransform: "uppercase", 
            color: "#80ced7", 
            fontFamily: "GearUp", 
            fontSize: 16 
          }}
          rowTextStyle={{
            textTransform: "uppercase", 
            color: "#80ced7", 
            fontFamily: "GearUp", 
            fontSize: 16 
          }}
          rowStyle={{
            backgroundColor: "#00060a", 
          }}
      />



      <Input containerStyle={{ 
        backgroundColor: "#00060a", 
        marginTop: "12%",
        marginLeft: "2%",
        width: "35%", 
        height: "5%",
        borderColor: '#80ced7',
        borderWidth: 1,
        borderRadius: 5,
      }} 
      inputStyle={{ 
        textTransform: "uppercase", 
        color: "#80ced7", 
        fontFamily: "GearUp", 
        fontSize: 16
      }} 
        value={eventTotalPlayers}
        keyboardType="numeric"
        onChangeText = {(eventTotalPlayers) => setEventTotalPlayers(eventTotalPlayers)}   
      >
      </Input>

      <GooglePlacesAutocomplete
        ref={ref}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en', // language of the results
        }}
        disableScroll
        styles=
        {
          {
            container: {
              flex: 1,
            },
            textInputContainer: {
              flexDirection: 'row',
            },
            textInput: {
              backgroundColor: '#00060a',
              color: '#80ced7',
              fontFamily: 'GearUp',
              height: 44,
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 15,
              flex: 1,
            },
            poweredContainer: {
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderColor: '#c8c7cc',
              borderTopWidth: 0.5,
            },
            powered: {},
            listView: { top: "18%" },
            row: {
              backgroundColor: '#00060a',
              padding: 13,
              height: 42,
              flexDirection: 'row',
            },
            separator: {
              height: 0.5,
              backgroundColor: '#c8c7cc',
            },
            description: { fontFamily: 'GearUp', fontSize: 10, color: '#80ced7', },
            loader: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 20,
            },
          }
        }
        onPress= {(data, details) => handleLocationPicked(data, details)}
        onFail={(error) => console.error(error)}
        textInputProps={{
          InputComp: Input,
          errorStyle: { color: 'red' },
          containerStyle: styles.locationPicker,
          labelStyle: { fontFamily: 'GearUp', fontSize: 12, color: "#000000" },
          label: "Select your location",
        }}
      />
     
      <Pressable
        style={styles.createEventButton}
        onPress={() => handleCreateEvent()}
      >
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => handleCreateEvent()}
        />
        <Text style={styles.createEventText}>{buttonMessage}</Text>
      </Pressable>



      <Button containerStyle={{ position: "relative", bottom: "25%", width: "94%", marginLeft: "2.5%" }} titleStyle={{ fontFamily: "GearUp", color: "#80ced7", fontSize: 14 }} color="#00060a" title={selectedDateLabel} onPress={showDateTimePicker} />
      <Text style={styles.dateTimeText}>PICK YOUR DATE AND TIME</Text>
      <DateTimePicker
        isVisible={datePickerVisibility}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
        mode='datetime'
        isDarkModeEnabled={colorScheme === 'dark'}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  createNewEvent: {
    position: "absolute",
    paddingTop: "3%",
    top: "6%",
    left: 8,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
    width: 275,
    height: 20,
  },
  goBack: {
    position: "absolute",
    top: "6%",
    left: "77%",
    borderRadius: 5,
    borderColor: "#80ced7",
    borderWidth: 3,
    backgroundColor: "#00060a",
    fontSize: 14,
    lineHeight: 25,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
    width: "20%",
    height: "4%",
  },
  goBackText: {
    position: "absolute",
    left: "24%",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
  },
  locationPicker: {

    position: "absolute",
    paddingTop: "4%",
    top: "25%"
  },

  datePicker: {
    position: "absolute",
    top: "29%"
  },
  eventNameText: {
    position: "absolute",
    top: "10%",
    left: "2.2%",
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp Soft",
    color: "#000",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 358,
    height: 52,
  },

  frameView: {
    position: "absolute",
    top: -20,
    left: 8,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  frameView1: {
    position: "absolute",
    top: 101,
    left: 8,
    width: 358,
    height: 52,
  },
  sportText: {
    position: "absolute",
    top: "21%",
    left: "2.2%",
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },

  dateTimeText: {
    position: "absolute",
    top: "73.5%",
    left: 12,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  totalPlayersText: {
    position: "absolute",
    top: "32%",
    left: "2.2%",
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },

  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 170,
    height: 52,
  },
  sOCCERText: {
    position: "absolute",
    top: 19,
    left: 6,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  icon: {
    height: "23.08%",
    width: "11.76%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "83.53%",
    top: "38.46%",
    right: "4.71%",
    bottom: "38.46%",
  },
  frameView2: {
    position: "absolute",
    top: 185,
    left: 8,
    width: 170,
    height: 52,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: "300%",
    height: 52,
  },
  playerCount: {
    position: "absolute",
    top: "20%",
    left: 0,
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "center",
    width: "304%",
    height: 23,
  },
  frameView3: {
    position: "absolute",
    top: 185,
    left: 211,
    width: 52,
    height: 52,
  },
  locationText: {
    position: "absolute",
    top: 246,
    left: 8,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "left",
  },
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 358,
    height: 187,
  },
  image3Icon: {
    position: "absolute",
    top: 107.03,
    left: 98.32,
    width: 21.37,
    height: 11.76,
  },
  image5Icon: {
    position: "absolute",
    top: 8.82,
    left: 336.63,
    width: 21.37,
    height: 11.76,
  },
  image4Icon: {
    position: "absolute",
    top: 71.74,
    left: 27.79,
    width: 21.37,
    height: 11.76,
  },
  groupView: {
    position: "absolute",
    top: 321,
    left: 8,
    width: 358,
    height: 187,
  },
  ellipseIcon: {
    position: "absolute",
    top: 40,
    left: 15,
    width: 32,
    height: 32,
  },
  text1: {
    position: "relative",
    paddingLeft: "15%",
    left: "100%",
    top: "100%",
    paddingTop: "42%",
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "GearUp",
    color: "#9ad1d4",
    textAlign: "left",
  },
  pressable: {
    position: "absolute",
    left: 4,
    top: 6,
  },
  framePressable: {
    position: "absolute",
    top: 7,
    left: 345,
    width: 21,
    height: 21,
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 321,
    height: 39,
  },
  createEventText: {
    position: "absolute",
    paddingTop: "2%",
    top: "25%",
    left: "27.5%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  createEventButton: {
    position: "absolute",
    top: 765,
    left: 27,
    width: 321,
    height: 39,
  },
  vs3Text: {
    position: "absolute",
    paddingTop: 12,
    top: 201,
    left: 267,
    fontSize: 20,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#000",
    textAlign: "center",
    width: 94,
    height: 38,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00060a",
    width: 358,
    height: 52,
  },
  eventLocation: {
    position: "absolute",
    paddingTop: "1%",
    top: 19,
    left: 6,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "GearUp",
    color: "#80ced7",
    textAlign: "left",
  },
  frameView4: {
    position: "absolute",
    top: 269,
    left: 8,
    width: 358,
    height: 52,
  },
  createEventView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateEvent;
